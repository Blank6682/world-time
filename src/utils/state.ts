import type { Timezone } from '~/types/Timezone'

export const zones = $ref<Timezone[]>([])

export function addToTimezon(time: Timezone) {
  zones.push(time)
}
