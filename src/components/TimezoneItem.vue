<script setup lang="ts">
import type { Timezone } from '~/types/Timezone'

const props = defineProps<{
  timezone: Timezone
}>()

const state = $computed(() => props.timezone.name.split('/')[0])
const city = $computed(() => props.timezone.name.split('/')[1])
const offset = $computed(() =>
  props.timezone.offset > 0
    ? `+${props.timezone.offset}`
    : props.timezone.offset,
)
</script>

<template>
  <div flex gap-2 py1>
    <div w-8 ma op80 font-bold>
      {{ offset }}
    </div>
    <div flex="~ col" text-left flex-auto>
      <div>
        {{ state }}
      </div>
      <div text-sm op50>
        {{ city }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
