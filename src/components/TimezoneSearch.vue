<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '~/types/Timezone'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)

const searchResult = $computed(() => {
  return fuse.search(input)
})

function add(t: Timezone) {
  addToTimezon(t)
  input = ''
  index = 0
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown')
    index = (index + 1) % searchResult.length
  else if (e.key === 'ArrowUp')
    index = (index - 1 + searchResult.length) % searchResult.length
  else if (e.key === 'Enter')
    add(searchResult[index].item)
}
</script>

<template>
  <div relative z-index:2>
    <input
      v-model="input"
      type="text"
      placeholder="Search Timezone..."
      w-full py-1 px-2 bg-transparent border="~ base rounded"
      @keydown="onKeyDown"
    >
    <div
      v-show="input"
      absolute top-full left-0 right-0 p1 max-h-100
      bg-base border="~ base rounded" shadow overflow-auto
    >
      <button
        v-for="(i, idx) in searchResult"
        :key="i.refIndex"
        block w-full px2
        :class="idx === index ? 'bg-gray:10' : ''"
        @click="add(i.item)"
      >
        <TimezoneItem :timezone="i.item" />
      </button>
    </div>
  </div>
</template>

<style></style>
