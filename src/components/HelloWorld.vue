<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const uppercase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div>
    <h1>Hello,{{ uppercase }}</h1>
  </div>
</template>

<style></style>
