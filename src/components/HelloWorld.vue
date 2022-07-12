<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div>
    <h1 text="green 2xl" font-mono>
      Hello,{{ uppercase }}
    </h1>
    <div i-carbon:bat text-5xl />
    <span i-ph:activity />
  </div>
</template>

<style></style>
