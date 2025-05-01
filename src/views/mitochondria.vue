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
  <h1 ref="bighText" class="text-5xl font-bold text-white">Why We Age—and How You Can Fight Back at the Cellular Level</h1>
  <p class="mt-2 text-2xl text-white">Aging starts before you see it. It begins deep within your cells, where weakened mitochondria drain your energy and slow your body's ability to repair itself.</p>
  <button
    @click="scrollToProducts"
    class="my-5 px-6 py-3 text-white border border-white bg-transparent text-lg font-semibold rounded-2xl hover:bg-white hover:text-black transition duration-300"
  >
    Shop the Collection
  </button>
</div>

</section>


<!-- Why BiGH Section -->
<section class="flex flex-col md:flex-row items-center px-6 py-20 bg-white">
  <!-- Left Half - Text -->
  <div class="md:w-1/2 w-full md:pr-10">
    <p class="text-xl md:text-6xl font-medium text-gray-900 mb-6 text-left">
      Meet Your Mitochondria—Your Cellular Powerhouses.
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
        When Mitochondria Slow Down, So Do We!
    </h2>
    <p class="italic text-2xl md:text-3xl text-white mb-15 leading-relaxed">
        As we age, our mitochondria get tired. They make less energy and produce more harmful waste. This makes us feel tired, age faster, and become more vulnerable to health problems.
    </p>
  </div>
</section>






</template>