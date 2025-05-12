<script setup>
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <!-- Login/Signup stays above everything -->
  <loginsignup_en />

  <!-- Video Background Container -->
  <div class="relative w-full text-white overflow-hidden min-h-[700px]">
    <!-- NavBar is now part of this section -->
    <NavBar />

    <!-- Background Video -->
    <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/videos/nuricell_bg_wave2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Opacity Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/20 z-0"></div>

    <!-- Content Section -->
    <section class="relative z-10 flex flex-col md:flex-row w-full min-h-[700px] pt-16 pb-20 px-4 md:px-16">
      <!-- Left Side -->
      <div class="w-full md:w-1/2 flex flex-col justify-start flex-1">
        <!-- Big Image -->
        <div class="w-full mb-6">
          <img
            src="/images/NuriCell1.png"
            alt="NuriCell Main"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Three small images -->
        <div class="flex justify-between px-10 items-center">
          <img
            @click="openModal('/images/nuricell_1.png')"
            src="/images/nuricell_1.png"
            alt="NuriCell Small 1"
            class="w-[28%] h-auto object-cover border border-white rounded-lg p-1 hover:opacity-70 transition duration-300 cursor-pointer"
          />
          <img
            @click="openModal('/images/nuricell_2.png')"
            src="/images/nuricell_2.png"
            alt="NuriCell Small 2"
            class="w-[28%] h-auto object-cover border border-white rounded-lg p-1 hover:opacity-70 transition duration-300 cursor-pointer"
          />
          <img
            @click="openModal('/images/nuricell_3.png')"
            src="/images/nuricell_3.png"
            alt="NuriCell Small 3"
            class="w-[28%] h-auto object-cover border border-white rounded-lg p-1 hover:opacity-70 transition duration-300 cursor-pointer"
          />
        </div>
      </div>

      <!-- Right Side -->
      <div class="w-full md:w-1/2 flex flex-col justify-start p-8 flex-1">
        <h1 class="text-5xl font-bold mb-4">NuriCell</h1>
        <p class="text-lg md:text-xl mb-6 leading-relaxed">
          Developed using the most advanced biotechnology and scientific research, NuriCell is BiGH’s Flagship product.
          It contains the most effective natural mitochondrial nutrients that help boost brain energy and memories.
          The unique formula combined ingredients that complement each other and provide the maximum effectiveness for
          brain cells revitalization. *
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div
            @click="openModal('/images/sup_nuri-1.png')"
            class="cursor-pointer border border-white p-4 rounded-xl text-center hover:opacity-70 transition duration-300"
          >
            <p class="font-semibold">Supplement Facts</p>
          </div>
          <div
            @click="openModal('/images/ser_nuri.png')"
            class="cursor-pointer border border-white p-4 rounded-xl text-center hover:opacity-70 transition duration-300"
          >
            <p class="font-semibold">Serving Size & Usage</p>
          </div>
        </div>

        <!-- Buy Now Button -->
        <div class="mt-2 text-center md:text-left">
          <button class="bg-white text-black font-semibold text-lg px-8 py-3 rounded-full shadow hover:bg-gray-200 hover:opacity-70 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click="showModal = false"
    >
      <div class="max-w-[800px] w-full flex justify-center items-center">
        <img
          :src="modalImage"
          alt="Popup Content"
          class="w-full h-auto object-contain cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuriCell',
  data() {
    return {
      showModal: false,
      modalImage: ''
    };
  },
  methods: {
    openModal(imagePath) {
      this.modalImage = imagePath;
      this.showModal = true;
    }
  }
};
</script>



