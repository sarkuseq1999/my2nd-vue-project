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


<!-- 22 Years of existence section -->
<section class="relative flex items-center justify-center h-[500px] bg-cover bg-center bg-no-repeat" style="background-image: url('/images/22yrs.jpg');">
    
    <!-- Overlay for Readability -->
    <div class="absolute inset-0 bg-black opacity-20"></div>

    <!-- Content Container (Flexbox) -->
    <div class="relative z-10 flex flex-col md:flex-row w-full h-full px-6 md:px-12">
      
      <!-- Left Empty Space (Pushes Text to the Right) -->
      <div class="md:w-1/2"></div>

      <!-- Right Half - Text -->
      <div class="md:w-1/2 flex flex-col justify-center text-white text-center md:text-left space-y-4">
        <h1 class="text-5xl font-bold">22 Years of Excellence</h1>
        <p class="text-2xl">
          For 22 years, our products have enriched lives with unmatched quality and reliability from all over the world. Join the thousands who trust us!
        </p>
      </div>

    </div>
  </section>

<!-- Top Quality Ingredients Section -->
<section class="bg-white flex flex-col md:flex-row items-center justify-between">
    
    <!-- Left Half (Text Content) -->
    <div class="md:w-1/2 text-gray-900 text-center md:text-left space-y-4 px-10">
      <h1 class="text-4xl font-bold">Highest Quality Ingredients</h1>
      <p class="text-lg leading-relaxed">
        We carefully pick our ingredients from areas of the world most suitable for their natural growth, 
        such as Deer Horn Shaped Red Reishi from Hokkaido, Japan.
      </p>
    </div>

    <!-- Right Half (Background Image) -->
    <div class="md:w-1/2 h-[400px] md:h-full flex items-end">
  <div class="bg-[url('/images/ingredients2.png')] bg-cover bg-no-repeat h-[400px] w-full"></div>
</div>





  </section>





</template>
