<template>
    <div class="w-full text-white bg-[url('/images/nuricellbg1.png')] bg-cover bg-center">
      <!-- Section Container -->
      <section class="flex flex-col md:flex-row w-full min-h-[700px] pt-16 pb-20 px-4 md:px-16 backdrop-brightness-90">
  
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
              src="/images/NuriCell1.png"
              alt="NuriCell Small"
              class="w-[28%] h-auto object-cover border border-white rounded-lg p-1 hover:opacity-70 transition duration-300"
            />
            <img
              src="/images/NuriCell1.png"
              alt="NuriCell Small"
              class="w-[28%] h-auto object-cover border border-white rounded-lg p-1 hover:opacity-70 transition duration-300"
            />
            <img
              src="/images/NuriCell1.png"
              alt="NuriCell Small"
              class="w-[28%] h-auto object-cover border border-white rounded-lg p-1 hover:opacity-70 transition duration-300"
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
            <!-- CLICKABLE BOX -->
            <div
              @click="showModal = true"
              class="cursor-pointer border border-white p-4 rounded-xl text-center hover:opacity-70 transition duration-300"
            >
              <p class="font-semibold">Supplement Facts</p>
            </div>
  
            <div class="border border-white p-4 rounded-xl text-center hover:opacity-70 transition duration-300">
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
  
    <!-- Modal Overlay -->
<div
  v-if="showModal"
  class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  @click.self="showModal = false"
>
  <div class="bg-white rounded-lg p-4 max-w-3xl w-full">
    <img
      src="/images/NuriCell1.png"
      alt="Supplement Facts"
      class="w-full h-auto rounded object-contain"
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
        showModal: false
      }
    }
  }
  </script>
