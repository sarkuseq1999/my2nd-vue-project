<script setup>
    import NavBar from './components/NavBar.vue'
    
</script>

<template>

<div id="app">
        <NavBar />
</div>

  <div class="flex justify-center h-50 items-center bg-amber-400 border-s-green-300 space-x-4 m-2 rounded-lg p-4">
    <div class="text-purple-700">This is my vue world wonderful! Testing12!!!!!!!!</div>
    <div class="text-green-700">This is going to be great!</div>
    <div class="text-orange-700">This is what I wanted!</div>
  </div>
  <div class="flex h-80 justify-center items-center space-x-4 bg-green-200 rounded-lg">
    <div class="text-blue-700">Muhahaha</div>
    <div>I can do anything with it</div>
    <div>This is great</div>
  </div>

  <div class="bg-blue-500 text-white text-lg p-4 md:bg-green-500 lg:bg-red-500">
  Resize the screen to see color changes!
</div>

<div class="flex flex-col md:flex-row bg-gray-200 p-4 gap-4">
  <div class="bg-blue-500 text-white p-6 flex-1 text-center">Item 1</div>
  <div class="bg-green-500 text-white p-6 flex-1 text-center">Item 2</div>
  <div class="bg-red-500 text-white p-6 flex-1 text-center">Item 3</div>
</div>

</template>

<style scoped>

</style>
