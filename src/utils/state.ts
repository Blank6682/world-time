import type { Timezone } from '~/types/Timezone'

export const now = useNow({ interval: 30_000 })
export const zoneNames = useStorage<string[]>('world-timezones', [])
export const zones = $computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name)))

export function addToTimezon(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

export function removeZone(timezone: Timezone) {
  zoneNames.value = zoneNames.value.filter(name => timezone.name !== name)
}

export function moveZone(timezone: Timezone, tar: 1 | -1) {
  const index = zoneNames.value.indexOf(timezone.name)
  if (index === -1)
    return
  const target = index + tar
  const temp = zoneNames.value[target]
  zoneNames.value[target] = timezone.name
  zoneNames.value[index] = temp
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

if (!zones.length)
  zoneNames.value.push(userTimezone)
