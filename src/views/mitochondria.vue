<script setup>
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <!-- Very Top Section with NavBar embedded -->
  <section class="relative h-[800px] flex flex-col w-full items-start overflow-hidden">
    <!-- NavBar is now part of this section -->
    <NavBar />

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
      <h1 ref="bighText" class="text-6xl font-bold text-white">What Is Aging?</h1>
      <p class="mt-2 text-2xl text-white italic">
        Aging isn’t just about wrinkles or gray hair. It begins deep within your cells, 
        where weakened mitochondria drain your energy and slow your body's ability to repair itself, 
        leaving you feeling tired and more vulnerable over time.
      </p>
    </div>
  </section>

  <!-- Why BiGH Section -->
  <section class="flex flex-col md:flex-row items-center px-10 md:px-24 py-20 bg-white">
    <div class="md:w-1/2 w-full md:pr-10">
      <p class="text-xl md:text-6xl font-medium text-gray-900 mb-6 text-left">
        Introducing Mitochondria
      </p>
      <p class="italic text-lg md:text-2xl text-gray-700 mb-4 text-left">
        Mitochondria are like batteries inside every cell of your body. They take nutrients and oxygen, turning them into the energy you need for every move, thought, and breath you take.
      </p>
    </div>
    <div class="md:w-1/2 w-full mt-10 md:mt-0 flex justify-center">
      <img src="/images/mito5.png" alt="Mitochondria Plant" class="max-w-full h-auto" />
    </div>
  </section>

  <!-- Why We Age Section -->
  <section class="relative flex flex-col items-center px-6 py-24 overflow-hidden text-white">
    <video 
      autoplay 
      muted 
      loop 
      playsinline 
      class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/videos/mitotheory2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute inset-0 bg-black opacity-40 z-0"></div>
    <div class="relative max-w-3xl w-full text-center z-10">
      <h2 class="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight text-center">
        The Mitochondria Theory of Aging
      </h2>
      <p class="italic text-2xl md:text-3xl text-white mb-15 leading-relaxed text-center mx-auto">
        As we age, these mitochondria become less efficient. They produce less energy and more harmful waste, 
        which damages the cells around them. This makes our cells weaker, slower to repair, and more likely 
        to stop working properly — leading to tiredness, slower recovery, and visible signs of aging.
      </p>
    </div>
  </section>

  <!-- Why It Matters Section -->
  <section class="relative flex items-center justify-center px-6 py-80 bg-cover bg-center bg-no-repeat text-white" style="background-image: url('/images/vitality1.jpg');">
    <div class="absolute inset-0 bg-black opacity-10 z-0"></div>
    <div class="relative z-10 max-w-4xl w-full text-center md:text-left">
      <p class="text-xl md:text-6xl font-medium mb-6">
        Energy, Vitality, Longevity—It All Depends On It
      </p>
      <p class="italic text-lg md:text-2xl leading-relaxed">
        These tiny powerhouses fuel everything your body does, from moving your muscles and keeping your heart beating to powering your brain and renewing your skin. But when they decline, everything slows down—your energy fades, your body struggles to repair, and the aging process speeds up.
      </p>
    </div>
  </section>

  <!-- How to Protect Section -->
  <section class="flex flex-col md:flex-row items-center px-6 py-24 bg-white">
    <div class="md:w-1/2 w-full md:pr-10">
      <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
        How To Protect Your Mitochondria?
      </h2>
      <p class="italic text-2xl md:text-3xl text-gray-700 leading-relaxed">
        Supporting healthy mitochondria starts with everyday choices—like staying active, getting deep, restful sleep, eating a nutrient-rich diet, and selecting supplements based on scientific evidence. These habits work together to keep your cellular engines running strong, fueling your energy and vitality from within.
      </p>
    </div>
    <div class="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
      <img src="/images/protection1.png" alt="Mitochondria Protection" class="max-w-full h-auto">
    </div>
  </section>

  <!-- Our Solution Section -->
  <section class="flex flex-col md:flex-row items-center px-6 py-20 bg-[url('/images/solution1.jpg')] bg-cover bg-center bg-no-repeat min-h-[800px]">
    <div class="md:w-1/2 w-full md:pr-10">
      <p class="text-xl md:text-6xl font-medium text-white mb-6 text-left">
        Our Solution to Mitochondrial Health
      </p>
      <p class="italic text-lg md:text-2xl text-white mb-4 text-left">
        At BiGH, our approach to mitochondrial health is rooted in science. We deliver targeted nutrients that power up your mitochondria, shield them from free radical damage, and support your body’s natural ability to generate new, healthy mitochondria. These nutrients — often missing or underrepresented in a typical modern diet — help restore what aging and stress take away, supporting better energy, resilience, and longevity from the cellular level up.
      </p>
    </div>
  </section>
</template>
