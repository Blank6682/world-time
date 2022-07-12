<script setup lang="ts"></script>

<template>
  <div>
    <div
      v-for="zone in zones"
      :key="zone.name"
      border="~ base" px4 py2
    >
      <TimezoneItem :timezone="zone" />
    </div>
  </div>
</template>

<style></style>
