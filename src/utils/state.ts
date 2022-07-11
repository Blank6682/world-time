import type { Timezone } from '~/types/index'

export const zones = $ref<Timezone[]>([])

export function addToTimezon(time: Timezone) {
  zones.push(time)
}
