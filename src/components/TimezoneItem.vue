<script setup lang="ts">
import { now } from '@vueuse/core'
import type { Timezone } from '~/types/Timezone'
import { homeOffset } from '~/utils/state'

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
const offset = $computed(() => {
  const offset = timezone.offset - homeOffset.value
  return offset > 0 ? `+${offset}` : offset
})

const time = $computed(() => formatTimezone.format(now()))
</script>

<template>
  <div flex flex-wrap gap-2 py1>
    <div
      :title="`${timezone.offset} GMT`"
      w-8 ma op80 font-bold
    >
      <div
        v-if="homeZone === timezone.name"
        icon i-carbon-home
        op50 ma
      />
      <div v-else>
        {{ offset }}
      </div>
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>
        {{ city }}
        <sup border="~ base rounded" px1> {{ timezone.abbr }}</sup>
      </div>
      <div text-sm op50 leading-1em>
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
