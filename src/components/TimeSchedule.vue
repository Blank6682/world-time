<script setup lang="ts">
import { moveZone, removeZone } from '~/utils/state'
</script>

<template>
  <div>
    <div
      v-for="zone, idx in zones" :key="zone.name"
      relative px4 py2
      border="~ base"
    >
      <TimezoneItem :timezone="zone">
        <TimeDial :timezone="zone" />
      </TimezoneItem>
      <div absolute left="-5" top-0 bottom-0 flex="~ col" justify-center>
        <button
          v-if="idx !== 0"
          icon-btn m--1px i-carbon-caret-up
          title="Move up"
          @click="moveZone(zone, -1)"
        />
        <button
          v-if="homeZone !== zone?.name"
          icon-btn m--1px i-carbon-close
          title="Remove"
          @click="removeZone(zone)"
        />
        <button
          v-if="homeZone !== zone?.name"
          icon-btn m--1px i-carbon-home scale-75
          title="Set to home zone"
          @click="setHomeZone(zone)"
        />
        <button
          v-if="idx !== zones.length - 1"
          icon-btn m--1px i-carbon-caret-down
          title="Move down"
          @click="moveZone(zone, 1)"
        />
      </div>
    </div>
  </div>
</template>

<style>
</style>
