<script setup lang="ts">
import type { Timezone } from '~/types/Timezone'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const hours = $computed(() =>
  Array.from({ length: 24 }, (_, i) => (i + timezone.offset + 24 + 1) % 24),
)
</script>

<template>
  <div flex="~ gap1" of-auto>
    <div
      v-for="i in hours" :key="i"
      flex-none
      items-center justofy-center
      text-center
      border="~ base" w7 h7
      :class="[
        i === 0 ? 'border-l' : '',
        i === 23 ? 'border-r' : '',
      ]"
    >
      {{ i }}
    </div>
  </div>
</template>

<style scoped>

</style>
