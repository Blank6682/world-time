<script setup lang="ts">
import Fuse from 'fuse.js'
import type { Timezone } from '~/types'

const fuse = new Fuse(timezones, {
  keys: ['name'],
})

let input = $ref('')
let index = $ref(0)

const searchResult = computed(() => {
  return fuse.search(input)
})

function add(t: Timezone) {
  addToTimezon(t)
  input = ''
  index = 0
}
</script>

<template>
  <div relative>
    <input
      v-model="input"
      type="text"
      placeholder="Search Timezone..."
      w-full
      py-1
      px-2
      bg-transparent
      border="~ base rounded"
    />
    <div v-show="input" absolute top-full bg-gray-900 left-0 right-0>
      <button
        v-for="i in searchResult"
        :key="i.refIndex"
        flex
        gap-2
        @click="add(i.item)"
      >
        <div font-mono w-10 text-right>
          {{ i.item.offset }}
        </div>
        <div>
          {{ i.item.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<style></style>
