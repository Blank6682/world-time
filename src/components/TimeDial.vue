<script setup lang="ts">
import { format } from 'date-fns'
import type { Timezone } from '~/types/Timezone'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const hours = $computed(() =>
  Array.from({ length: 24 }, (_, i) => i + timezone.offset + 1),
)

const days = $computed(() => [
  hours.filter(i => i < 0).map(h => (h + 24) % 24),
  hours.filter(i => i >= 0 && i < 24),
  hours.filter(i => i >= 24).map(h => (h + 24) % 24)])

const nowTime = $computed(() => now.value)

const isMidnight = (h: number) => h <= 7 || h >= 22
const isNight = (h: number) => h <= 7 || h >= 18
</script>

<template>
  <div flex="~" select-none of-auto items-end>
    <template v-for="day, idx in days" :key="idx">
      <div
        v-if="day.length"
        flex="~" flex-none
        border="~ sky7/30 rounded"
        of-hidden
      >
        <div
          v-for="i in day" :key="i"
          flex="~ col none"
          items-center justofy-center
          w7 h7
          :class="[
            isMidnight(i) ? 'bg-sky7/70 text-white'
            : isNight(i) ? 'bg-sky/20' : '',
          ]"
        >
          <div v-if="i">
            {{ i }}
          </div>
          <div v-else text-xs leading-1em text-center>
            {{ format(nowTime, 'MMM') }}
            {{ format(nowTime, 'dd') }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

</style>
