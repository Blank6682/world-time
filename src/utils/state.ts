import type { Timezone } from '~/types/Timezone'

export const zoneNames = useStorage<string[]>('world-timezones', [])
export const zones = $computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name)))

console.log(zones)
export function addToTimezon(timezone: Timezone) {
  zoneNames.value.push(timezone.name)
}

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

if (!zones.length)
  zoneNames.value.push(userTimezone)
