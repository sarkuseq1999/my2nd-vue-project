<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>

  <div>
    <NavBar />
  </div>

  <!-- Top Section -->
  <section class="h-[800px] flex items-center text-center bg-cover bg-center bg-no-repeat bg-[url('/images/testbackground1.jpg')]">
    <div class="w-1/2 mx-auto">
      <h1 class="text-8xl font-bold text-white">BiGH</h1>
      <p class="mt-2 text-3xl text-white">Your top choice for longevity and healthy aging.</p>
    </div>
  </section>

  <!-- SVG Divider (Corrected and Visible) -->
  <div class="-mt-1">
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path fill-opacity="1"
        d="M0,224L48,186.7C96,149,192,75,288,96C408,117,528,235,648,250.7C768,267,888,181,1008,144C1128,107,1248,117,1368,138.7L1440,160V320H1368C1248,320,1128,320,1008,320C888,320,768,320,648,320C528,320,408,320,288,320C168,320,48,320,24,320H0Z" fill="#111827"></path>
  </svg>
  </div>

  <!-- Bottom Section -->
  <section class="h-[400px] bg-gray-900 flex items-center justify-center text-white text-4xl">
    Bottom Section
  </section>

  <h1>Welcome to My Home Page! Hi!</h1>

</template>
