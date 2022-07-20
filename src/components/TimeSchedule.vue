<script setup lang="ts">
import { moveZone, removeZone } from '~/utils/state'
</script>

<template>
  <div>
    <div v-for="zone, idx in zones" :key="zone.name" relative px4 py2 border="~ base" z-index:1>
      <TimezoneItem :timezone="zone" />
      <div absolute left="-5" top-0 bottom-0 flex="~ col" justify-center>
        <button
          icon-btn i-carbon-close
          title="Remove"
          @click="removeZone(zone)"
        />
        <button
          v-if="idx !== 0" icon-btn
          i-carbon-caret-up
          title="Move Up"
          @click="moveZone(zone, -1)"
        />
        <button
          v-if="idx !== zones.length - 1"
          icon-btn i-carbon-caret-down
          title="Move Down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
  </div>
</template>

<style>
</style>
