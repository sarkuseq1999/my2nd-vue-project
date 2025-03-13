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
  <section class="h-screen border-2 flex w-full items-center bg-cover bg-[url('/images/bg_2.jpg')]">
    <div class="w-1/3 mx-12 text-center">
      <h1 class="text-8xl font-bold text-white">BiGH</h1>
      <p class="mt-2 text-3xl text-white">Your top choice for longevity and healthy aging.</p>
    </div>
    <div class="w-2/3 mx-auto text-center"></div>
  </section>

<!-- Bottom Section -->
<section class="relative h-[500px] bg-purple-400 flex items-center justify-center text-white text-4xl">
    Bottom Section

    <!-- Cloud Shape Divider -->
    <svg class="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path fill="#ffffff" d="M0,256L48,245.3C96,235,192,250,500,218.7C384,224,480,256,576,266.7C672,277,768,267,864,240C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
</section>




</template>
