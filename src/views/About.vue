<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '../components/NavBar.vue'
const aboutSectionRef = ref(null)
const missionSectionRef = ref(null)
const wavesSectionRef = ref(null)
let vantaEffect = null
let globeEffect = null
let wavesEffect = null
onMounted(() => {
  setTimeout(() => {
    // CLOUDS2 effect
    if (window.VANTA && window.VANTA.CLOUDS2 && window.THREE) {
      vantaEffect = window.VANTA.CLOUDS2({
        el: aboutSectionRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        texturePath: '/images/noise.png'
      })
    }
    // GLOBE effect
    if (window.VANTA && window.VANTA.GLOBE && window.THREE) {
      globeEffect = window.VANTA.GLOBE({
        el: missionSectionRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2727d9,
        backgroundColor: 0xffffff
      })
    }
    // WAVES effect
    if (window.VANTA && window.VANTA.WAVES && window.THREE) {
      wavesEffect = window.VANTA.WAVES({
        el: wavesSectionRef.value,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xca5d14
      })
    }
  }, 300)
})
onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
  if (globeEffect) globeEffect.destroy()
  if (wavesEffect) wavesEffect.destroy()
})
</script>


<template>
  <!-- Section 1: Thoughts on Supplements -->
  <section
    ref="aboutSectionRef"
    class="relative w-full min-h-screen text-white overflow-hidden"
  >
    <!-- NavBar -->
    <div class="relative z-10">
      <NavBar />
    </div>
    <!-- About Content with Background Opacity -->
    <div class="relative z-10 flex flex-col items-center px-6 py-20">
      <div class="bg-black/30 backdrop-blur-md rounded-2xl p-10 max-w-3xl w-full space-y-6">
        <h1 class="text-5xl md:text-6xl font-bold text-white text-center py-10">
          Our Thoughts On Supplements
        </h1>
        <p class="text-lg md:text-2xl leading-relaxed text-white">
          We live in a time of incredible change. Technology is evolving faster than ever, and the rise of AI is reshaping the way we live, work, and care for ourselves. In the middle of this revolution, one thing remains clear: our health is everything.
        </p>
        <p class="text-lg md:text-2xl leading-relaxed text-white">
          We believe that supplements have become more than just support—they’ve become a bridge. A bridge between what our bodies need and what our daily lives sometimes can’t provide.
          Of course, sleep, nutrition, and movement are still essential. But now, for the first time in history, science is opening doors to something truly extraordinary: the possibility of living longer, stronger, and better.
        </p>
        <p class="text-lg md:text-2xl leading-relaxed text-white">
          That’s why we started BiGH. To help people like you not just survive—but thrive. We’re here to support your journey with cutting-edge science from real scientists and the finest ingredients nature has to offer. Because your health is your future. And the future is full of possibility.
        </p>
      </div>
    </div>
  </section>
 <!-- Section 2: Mission Statement with GLOBE animation -->
<section
  ref="missionSectionRef"
  class="relative w-full min-h-screen text-black overflow-hidden flex items-center justify-center px-4"
>
  <div class="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-3xl w-full space-y-6 bg-white/80 backdrop-blur-md rounded-2xl">
    <h2 class="text-4xl md:text-6xl font-bold">
      Our Mission
    </h2>
    <p class="italic text-lg md:text-3xl leading-relaxed">
      Our mission is to help people live longer, stronger, and healthier lives by using the best of longevity science. Our products are made by real scientists with the highest quality ingredients from the best natural places in the world. We explain science in a simple, clear way so everyone can understand and take care of their health. Using the internet and new technology, we bring trusted knowledge and premium products directly to customers everywhere.
    </p>
  </div>
</section>

<!-- Section 3: Our Value with WAVES animation -->
<section
  ref="wavesSectionRef"
  class="relative w-full min-h-screen text-white overflow-hidden flex items-center justify-center px-4"
>
  <div class="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-3xl w-full space-y-8 bg-black/10 backdrop-blur-md rounded-2xl">
    <h2 class="text-4xl md:text-6xl font-bold">
      Our Value
    </h2>
    <p class="text-lg md:text-2xl leading-relaxed">
      At BiGH, we are guided by values that build trust and make health easier for everyone:
    </p>
    <ul class="space-y-4 text-left text-lg md:text-xl leading-relaxed list-disc list-inside">
      <li>
        <strong>Transparency</strong> — We share exactly what’s in our products, where our ingredients come from, and how they are made. Nothing hidden, nothing confusing.
      </li>
      <li>
        <strong>Honesty</strong> — We speak clearly and truthfully about what our products can do — no hype, no exaggeration. Our customers deserve real, honest information.
      </li>
      <!-- Uncomment if you want to include -->
      <li>
        <strong>Ingredient Purity</strong> — We use only the highest quality ingredients, sourced from the best natural regions around the world, and we hold them to the strictest purity and safety standards.
      </li>
      <li>
        <strong>Scientific Integrity</strong> — Every product we make is backed by real science, developed by real scientists. We follow the research — not the trends.
      </li>
      <li>
        <strong>Simplicity</strong> — Good health should be easy to understand. We make science simple and clear, so everyone can feel confident in their choices.
      </li>
      <li>
        <strong>Continuous Improvement</strong> — We never stop learning. We stay updated with the latest scientific discoveries and technologies to keep making better, safer, and more effective products for our customers.
      </li>
    </ul>
  </div>
</section>

</template>
<style>
.vanta-canvas {
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 0 !important;
}
</style>
