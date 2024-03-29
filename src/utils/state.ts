import type { Timezone } from '~/types/Timezone'

const userTimezone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone

export interface State {
  name?: string
  description?: string
  zones: string[]
  home: string
  date: Date
  selections: Selection[]
}

export interface Selection {
  from: Date
  to: Date
}

export const storage = useStorage<State>('word-time-state', {
  zones: [userTimezone],
  home: userTimezone,
  date: new Date(),
  selections: [],
})

export const now = useNow({ interval: 30_000 })
export const zoneNames = toRef(storage.value, 'zones')
export const homeZone = toRef(storage.value, 'home')
export const homeOffset = computed(() => timezones.find(i => i.name === homeZone.value)?.offset || 0)
export const zones = computed(() => zoneNames.value.map(name => timezones.find(i => i.name === name)))

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

export function setHomeZone(timezone: Timezone) {
  homeZone.value = timezone.name
}

if (!zoneNames.value?.length)
  zoneNames.value = [userTimezone]
