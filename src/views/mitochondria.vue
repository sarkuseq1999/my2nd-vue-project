<script setup>
import NavBar from '../components/NavBar.vue';
import loginsignup_en from '../components/loginsignup_en.vue';

</script>





<template>
  <!-- Absolute Container for Navbar & LoginSignup -->
  <div class="relative top-0 left-0 w-full z-20">
    <loginsignup_en />
    <NavBar />
  </div>



<!-- Very Top Section -->
<section class="relative h-[800px] flex flex-col w-full items-start overflow-hidden">

<!-- Video Background -->
<video 
  autoplay 
  muted 
  loop 
  playsinline 
  class="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source src="/videos/agingwoman1.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<!-- Hero Content Inside Video -->
<div class="relative w-1/3 ml-12 mt-80 text-left z-10">
  <h1 ref="bighText" class="text-5xl font-bold text-white">What Is Aging?</h1>
  <p class="mt-2 text-2xl text-white">Aging isn’t just about wrinkles or gray hair. It begins deep within your cells, where weakened mitochondria drain your energy and slow your body's ability to repair itself, leaving you feeling tired and more vulnerable over time.</p>

</div>

</section>


<!-- Why BiGH Section -->
<section class="flex flex-col md:flex-row items-center px-6 py-20 bg-white">
  <!-- Left Half - Text -->
  <div class="md:w-1/2 w-full md:pr-10">
    <p class="text-xl md:text-6xl font-medium text-gray-900 mb-6 text-left">
      Introducing Mitochondria, Your Cellular Powerhouses.
    </p>
    <p class="italic text-lg md:text-2xl text-gray-700 mb-4 text-left">
      Mitochondria are like batteries inside every cell of your body. They take nutrients and oxygen, turning them into the energy you need for every move, thought, and breath you take.
    </p>

  </div>

  <!-- Right Half - Image -->
  <div class="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
    <img src="/images/mitoplant1.png" alt="Mitochondria Plant" class="max-w-full h-auto" />
  </div>
</section>




<!-- Why We Age Section -->
<section class="relative flex flex-col items-center px-6 py-24 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/mitoaging2.jpg');">
  
  <!-- Overlay for background opacity -->
  <div class="absolute inset-0 bg-black opacity-40 z-0"></div>

  <!-- Content -->
  <div class="relative max-w-3xl w-full text-left z-10">
    <h2 class="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
        The Mitochondria Theory of Aging
    </h2>
    <p class="italic text-2xl md:text-3xl text-white mb-15 leading-relaxed">
        As we age, our mitochondria become less efficient. They produce less energy and more harmful byproducts like free radicals. This can lead to cellular damage, fatigue, and visible signs of aging.
    </p>
  </div>
</section>


<!-- Why Why It Matters -->
<section class="flex flex-col md:flex-row items-center px-6 py-20 bg-white">
  <!-- Left Half - Text -->
  <div class="md:w-1/2 w-full md:pr-10">
    <p class="text-xl md:text-6xl font-medium text-gray-900 mb-6 text-left">
      Energy, Vitality, Longevity—It All Depends On It
    </p>
    <p class="italic text-lg md:text-2xl text-gray-700 mb-4 text-left">
      Lower mitochondrial energy affects everything—from your skin and muscles to your heart and brain.

    </p>

  </div>

  <!-- Right Half - Image -->
  <div class="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
    <img src="/images/mitoplant1.png" alt="Mitochondria Plant" class="max-w-full h-auto" />
  </div>
</section>





<!-- Why We Age Section -->
<section class="relative flex flex-col items-center px-6 py-24 bg-cover bg-center bg-no-repeat" style="background-image: url('/images/mitoaging2.jpg');">
  
  <!-- Overlay for background opacity -->
  <div class="absolute inset-0 bg-black opacity-40 z-0"></div>

  <!-- Content -->
  <div class="relative max-w-3xl w-full text-left z-10">
    <h2 class="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
      How To Protect Your Mitochondria?
    </h2>
    <p class="italic text-2xl md:text-3xl text-white mb-15 leading-relaxed">
      Supporting healthy mitochondria starts with everyday choices—like staying active, getting deep, restful sleep, eating a nutrient-rich diet, and selecting supplements based on scientific evidence. These habits work together to keep your cellular engines running strong, fueling your energy and vitality from within.
    </p>
  </div>
</section>


<!-- Why Why It Matters -->
<section class="flex flex-col md:flex-row items-center px-6 py-20 bg-white">
  <!-- Left Half - Text -->
  <div class="md:w-1/2 w-full md:pr-10">
    <p class="text-xl md:text-6xl font-medium text-gray-900 mb-6 text-left">
      Our Solution to Mitochondrial Health
    </p>
    <p class="italic text-lg md:text-2xl text-gray-700 mb-4 text-left">
      At BiGH, our approach to mitochondrial health is rooted in science. We deliver targeted nutrients that energize your mitochondria, shield them from free radical damage, and support your body’s natural ability to generate new, healthy mitochondria. These nutrients — often missing or underrepresented in a typical modern diet — help restore what aging and stress take away, supporting better energy, resilience, and longevity from the cellular level up.

    </p>

  </div>

  <!-- Right Half - Image -->
  <div class="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
    <img src="/images/mitoplant1.png" alt="Mitochondria Plant" class="max-w-full h-auto" />
  </div>
</section>





</template>