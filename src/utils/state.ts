import type { Timezone } from '~/types/index'

export const zones = ref<Timezone[]>([])

export function addToTimezon(time: Timezone) {
  zones.value.push(time)
}
