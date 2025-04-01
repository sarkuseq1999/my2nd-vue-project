<script setup>
import NavBar from '../components/NavBar.vue';
import loginsignup_en from '../components/loginsignup_en.vue';


import { onMounted, ref } from 'vue';
import gsap from 'gsap';

// Reference to the "BiGH" text element
const bighText = ref(null);

onMounted(() => {
  gsap.from(bighText.value, {
    opacity: 0,   // Starts fully invisible
    x: -1000,        // Moves up from 50px
    duration: 2,  // Takes 1 second
    ease: 'power2.out' // Smooth easing effect
  });
});
</script>

<template>

  <!-- Top Section with Background -->
  <section class="relative h-screen flex flex-col w-full items-center bg-cover bg-[url('/images/bg_2.jpg')]">
    
  <!-- Absolute Container for Navbar & LoginSignup -->
<div class="absolute top-0 left-0 w-full z-20">
  <loginsignup_en />
  <NavBar />
</div>


    <!-- Hero Content Inside Background -->
    <div class="w-1/3 mx-12 text-center mt-32">
      <h1 ref="bighText" class="text-8xl font-bold text-white">BiGH</h1>
      <p class="mt-2 text-3xl text-white">Your top choice for longevity and healthy aging.</p>
    </div>

  </section>

  <!-- Bottom Section -->
  <section class="relative z-20 flex items-center justify-center h-[500px] bg-cover bg-center bg-no-repeat" style="background-image: url('/images/testingsection1.png');">
      Bottom Section

  </section>

  <!-- 22 Years of Excellence Section -->
  <section class="relative z-10 -mt-20 flex items-center justify-center h-[500px] bg-cover bg-center bg-no-repeat" style="background-image: url('/images/22yrs.jpg');">
      
      <!-- Overlay for Readability -->
      <div class="absolute inset-0 bg-black opacity-20"></div>

      <!-- Content Container -->
      <div class="relative z-10 flex flex-col md:flex-row w-full h-full px-6 md:px-12">
        
        <!-- Left Empty Space -->
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
  <section class="relative bg-white flex h-[500px]">
      
      <!-- Left Half (Text Content) -->
      <div class="relative w-1/2 flex flex-col items-center justify-center text-gray-900 text-center h-full">
        <h1 class="text-4xl font-bold">Highest Quality Ingredients</h1>
        <p class="text-lg leading-relaxed">
          We carefully pick our ingredients from areas of the world most suitable for their natural growth, 
          such as Deer Horn Shaped Red Reishi from Hokkaido, Japan.
        </p>
      </div>

      <!-- Right Half (Container for Absolute Image) -->
      <div class="relative w-1/2">
        <!-- Image Positioned at the Bottom -->
        <img src="/images/ingredients2.png" alt="Ingredients" class="absolute bottom-0 left-15">
      </div>

  </section>

</template>

