<script setup>
import NavBar from '../components/NavBar.vue'
import loginsignup_en from '../components/loginsignup_en.vue';
</script>

<template>

<div><loginsignup_en /></div>

  <!-- Navigation Bar -->
  <div>
    <NavBar />
  </div>

  <!-- Top Section -->
  <section class="h-screen flex items-center text-center opacity-90 bg-cover bg-center bg-no-repeat bg-[url('/images/testbackground1.jpg')]">
    <div class="w-1/3 mx-auto">
      <h1 class="text-8xl font-bold text-white">BiGH</h1>
      <p class="mt-2 text-3xl text-white">Your top choice for longevity and healthy aging.</p>
    </div>
  </section>

  <!-- Bottom Section -->
  <section class="h-[400px] bg-white-900 flex items-center justify-center text-white text-4xl">
    Bottom Section
  </section>

</template>
