<script setup>
import NavBar from '../components/NavBar.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let vantaEffect = null
const excellenceSection = ref(null)

onMounted(() => {
  // GSAP Animations
  gsap.from('.hero-title', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.from('.hero-paragraph', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: 'power3.out'
  })

  gsap.from('.hero-button', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.6,
    ease: 'power3.out'
  })

  gsap.from('.bigh-quote', {
    scrollTrigger: {
      trigger: '.bigh-quote',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.bigh-paragraph', {
    scrollTrigger: {
      trigger: '.bigh-paragraph',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
  })

  gsap.from('.bigh-button', {
    scrollTrigger: {
      trigger: '.bigh-button',
      start: 'top 90%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
  })

  // Vanta RINGS Animation
  if (typeof VANTA !== 'undefined' && VANTA.BIRDS) {
    vantaEffect = VANTA.BIRDS({
      el: excellenceSection.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    })
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})
</script>

<template>
  <!-- Very Top Section with NavBar embedded -->
  <section class="relative h-[800px] flex flex-col w-full overflow-hidden items-center md:items-start">
    <NavBar />

    <!-- Video Background -->
    <video 
      autoplay 
      muted 
      loop 
      playsinline 
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/videos/cell1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Hero Content -->
    <div class="relative w-full md:w-1/3 mt-40 md:mt-60 px-20 md:px-0 md:ml-12 text-center md:text-center z-10">
      <h1 class="hero-title text-4xl md:text-5xl font-bold text-white">
        Testing - Recharge Your Cells. Restore Youth.
      </h1>
      <p class="hero-paragraph mt-2 text-xl md:text-2xl text-white">
        Support your body at its core -- your mitochondria -- to boost energy, slow aging, and enjoy life.
      </p>
      <button
        @click="scrollToProducts"
        class="hero-button my-5 px-6 py-3 text-white border border-white bg-transparent text-lg font-semibold rounded-2xl hover:bg-white hover:text-black transition duration-300"
      >
        Shop the Collection
      </button>
    </div>
  </section>

  <!-- Why BiGH Section -->
  <section class="flex flex-col items-center px-6 py-20 bg-white">
    <p class="bigh-quote max-w-2xl text-xl md:text-6xl font-medium text-gray-900 mb-6 text-left">
      "We believe healthy aging starts deep inside—where energy is made and damage begins."
    </p>
    <p class="bigh-paragraph italic max-w-2xl text-lg md:text-2xl text-gray-700 mb-4 text-left">
      Our products target the real source of aging: your cells' ability to function, repair, and thrive. By restoring mitochondrial health and shielding against daily damage, we help you live younger, longer.
    </p>
    <div class="bigh-button max-w-2xl w-full text-center">
      <button class="mt-8 px-8 py-3 text-lg font-semibold text-black bg-white border border-black rounded-2xl shadow hover:bg-gray-100 transition duration-300">
        Learn More About BiGH
      </button>
    </div>
  </section>

  <!-- Why We Age Section -->
  <section class="flex flex-col items-center px-6 py-24 bg-[url('/images/whyage2.png')] bg-cover bg-center bg-no-repeat">
    <div class="max-w-3xl w-full text-center">
      <h2 class="text-5xl md:text-6xl font-bold text-white mb-10 leading-tight">
        Why Do We Age?
      </h2>
      <p class="italic text-2xl md:text-3xl text-white mb-15 leading-relaxed">
        Aging is a natural process — but scientists now believe it's not just about time. At the cellular level, aging happens when our cells can no longer function, repair, or protect themselves the way they used to.
      </p>
      <h3 class="text-5xl font-bold text-white mb-6">
        The Mitochondrial Theory of Aging
      </h3>
      <p class="italic text-2xl md:text-3xl text-white mb-10 leading-relaxed">
        Mitochondria are the power plants inside your cells. They make the energy that keeps you alive and active. But over time, mitochondria get damaged by stress, toxins, and everyday wear — leading to lower energy and more cell breakdown.
      </p>
      <button class="mx-auto px-10 py-4 text-xl font-semibold text-white border border-white bg-transparent rounded-2xl hover:bg-white hover:text-black transition duration-300">
        Learn More
      </button>
    </div>
  </section>

  <!-- Science-Based Formulation Section -->
  <section class="relative w-full bg-white py-30 px-6 text-center overflow-hidden">
    <div id="particles-js" class="absolute inset-0 w-full h-full z-0"></div>
    <div class="relative max-w-4xl mx-auto z-20">
      <h2 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
        Science-Driven Formulation
      </h2>
      <p class="italic text-3xl md:text-3xl text-gray-700 leading-relaxed">
        Our mitochondrial health supplements are meticulously formulated by real scientists and researchers who specialize in cellular biology, longevity, and bioenergetics. Each ingredient is backed by scientific research and chosen to support your body’s energy production, resilience, and healthy aging at the cellular level.
      </p>
    </div>
  </section>

  <!-- Highest Quality Ingredients Section -->
  <section class="relative py-24 px-6 text-center overflow-hidden text-white">
    <div class="absolute top-0 left-0 w-full h-full z-0 opacity-80">
      <video autoplay muted loop playsinline class="w-full h-full object-cover">
        <source src="/videos/nature1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 p-10">
      <h2 class="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
        Sourced from Nature’s Best
      </h2>
      <p class="italic text-2xl md:text-3xl leading-relaxed drop-shadow-md">
        We believe that quality starts at the source. That’s why we go the extra mile to find ingredients 
        from regions around the world where they grow best — in their most natural, nutrient-rich form.
      </p>
      <p class="italic mt-6 text-2xl md:text-3xl leading-relaxed drop-shadow-md">
        For example, we use <strong>Deer Horn Shaped Reishi</strong> from the pristine forests of 
        <strong>Hokkaido, Japan</strong> and <strong>Green Bee Propolis</strong> from the lush rainforests of <strong>Brazil</strong>, 
        both chosen for their unmatched purity and potency.
      </p>
    </div>
  </section>

  <!-- Made in California and GMP Certified -->
  <section class="flex flex-wrap w-full">
    <div class="w-1/2 aspect-square relative bg-cover bg-center" style="background-image: url('/images/madeincalifornia2.jpg');">
      <div class="absolute inset-0 flex items-center justify-center text-center">
        <span class="text-white text-3xl md:text-5xl lg:text-8xl font-bold drop-shadow-lg">Made in California</span>
      </div>
    </div>
    <div class="w-1/2 aspect-square relative bg-cover bg-center" style="background-image: url('/images/gmp2.jpg');">
      <div class="absolute inset-0 flex items-center justify-center text-center">
        <span class="text-white text-3xl md:text-5xl lg:text-8xl font-bold drop-shadow-lg">GMP Certified</span>
      </div>
    </div>
  </section>

<!-- 22 Years of Excellence Section with Vanta and dark overlay -->
<section
  ref="excellenceSection"
  class="relative z-10 flex items-center justify-center h-[500px]"
>
  <!-- Dark semi-transparent overlay ABOVE the Vanta canvas but BELOW the content -->
  <div class="absolute inset-0 bg-black/20 z-0"></div>

  <!-- Centered Content Container -->
  <div class="relative z-10 max-w-3xl h-full flex items-center justify-center px-8 md:px-16">
    <div class="text-center text-white space-y-4">
      <h1 class="text-5xl font-bold">22 Years of Excellence</h1>
      <p class="text-2xl">
        For 22 years, our products have enriched lives with unmatched quality and reliability from all over the world. Join the hundreds of thousands who trust us!
      </p>
    </div>
  </div>
</section>




</template>




