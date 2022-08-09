<script setup lang="ts">
import { now } from '@vueuse/core'
import type { Timezone } from '~/types/Timezone'

const { timezone } = defineProps<{
  timezone: Timezone
}>()

const formatTimezone = new Intl.DateTimeFormat('en-US', {
  timeZone: timezone.name,
  hour: 'numeric',
  minute: 'numeric',
})

const state = $computed(() => timezone.name.split('/')[0])
const city = $computed(() => timezone.name.split('/')[1]?.replace(/_/g, ' '))
const offset = $computed(() =>
  timezone.offset > 0
    ? `+${timezone.offset}`
    : timezone.offset,
)

const time = $computed(() => formatTimezone.format(now()))
</script>

<template>
  <div flex flex-wrap gap-2 py1>
    <div w-8 ma op80 font-bold>
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>
        {{ city }}
        <sup border="~ base rounded" px1> {{ timezone.abbr }}</sup>
      </div>
      <div text-sm op50>
        {{ state }}
      </div>
    </div>
    <div tabular-nums>
      {{ time }}
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
