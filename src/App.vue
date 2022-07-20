<script setup lang="ts"></script>

<template>
  <div text-sans bg-canvas h-screen>
    <NavBar />
    <div border="~ base rounded" bg-base shadow m8>
      <AcitonBar />
      <TimeSchedule />
    </div>
  </div>
</template>

<style>
html {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
html.dark {
  color-scheme: dark;
  color: white;
  background: #222;
}
</style>
