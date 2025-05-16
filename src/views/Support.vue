<script setup>
import NavBar from '../components/NavBar.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'

let vantaEffect = null
const vantaRef = ref(null)

onMounted(() => {
  // Ensure VANTA is loaded (assumes you added the script tags in index.html)
  if (window.VANTA && window.VANTA.TOPOLOGY) {
    vantaEffect = window.VANTA.TOPOLOGY({
      el: vantaRef.value,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x4a50c0,
    })
  } else {
    console.error('VANTA.TOPOLOGY not loaded. Please check your index.html.')
  }
})

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy()
})

const success = ref(false)
const error = ref(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)

  try {
    const response = await fetch('https://formspree.io/f/xrbqjazz', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      success.value = true
      error.value = false
      form.reset()
    } else {
      throw new Error('Form failed')
    }
  } catch (err) {
    success.value = false
    error.value = true
  }
}
</script>

<template>


<!-- Top Section with Vanta Background -->
<section
  ref="vantaRef"
  class="relative h-[800px] flex flex-col w-full overflow-hidden justify-center items-center text-center px-4"
>
  <!-- NavBar -->
  <NavBar class="absolute top-0 left-0 w-full z-20" />

  <!-- Hero Content -->
  <div class="relative z-10 max-w-4xl w-full">
    <h1 class="text-5xl md:text-6xl font-bold text-white">What Can We Do For You?</h1>
    <p class="mt-4 text-xl md:text-2xl text-white italic">
      If you have any questions or concerns, please feel free to reach out to us and we'll get back to you within 24 to 48 business hours.
    </p>

    <!-- Combined Info Box -->
    <div class="mt-10 border border-white/50 rounded-2xl p-6 text-white flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/40 text-center">
      <!-- Contact Information -->
      <div class="md:w-1/2 flex flex-col items-center justify-center pr-4 md:pr-6 py-4">
        <h2 class="text-2xl font-semibold mb-2">Contact Information</h2>
        <p>📞 Support Line: 800-919-2089</p>
        <p>✉️ Support Email: support@bighnow.com</p>
        <p>🕘 Hours: 9AM - 6PM PST (Mon–Fri)</p>
      </div>

      <!-- Corporate Address -->
      <div class="md:w-1/2 flex flex-col items-center justify-center pt-6 md:pt-0 md:pl-6 py-4">
        <h2 class="text-2xl font-semibold mb-2">Corporate Address</h2>
        <p>🏢 2200 E Route 66 Suite 103</p>
        <p>Glendora, CA 91740, USA</p>
      </div>
    </div>
  </div>
</section>






<!-- Contact Form Section -->
<section class="flex flex-col items-center px-6 md:px-24 py-20 bg-white text-gray-800">
  <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">Contact Form</h2>

  <!-- Success Message -->
  <div v-if="success" class="mb-6 text-green-600 font-semibold text-center">
    ✅ Your message has been sent successfully!
  </div>

  <!-- Error Message -->
  <div v-if="error" class="mb-6 text-red-600 font-semibold text-center">
    ❌ Something went wrong. Please try again later.
  </div>

  <form @submit="handleSubmit" class="w-full max-w-2xl space-y-6">
    <div>
      <label class="block mb-2 font-semibold">Your Name <span class="text-red-500">*</span></label>
      <input
        type="text"
        name="name"
        required
        placeholder="First Name, Last Name"
        class="w-full p-3 border rounded-md placeholder-gray-400"
      />
    </div>

    <div>
      <label class="block mb-2 font-semibold">Customer ID (if registered)</label>
      <input
        type="text"
        name="customer_id"
        placeholder="Numbers Only"
        class="w-full p-3 border rounded-md placeholder-gray-400"
      />
    </div>

    <div>
      <label class="block mb-2 font-semibold">Email <span class="text-red-500">*</span></label>
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        class="w-full p-3 border rounded-md placeholder-gray-400"
      />
    </div>

    <div>
      <label class="block mb-2 font-semibold">Phone Number</label>
      <input
        type="tel"
        name="phone"
        placeholder="Numbers Only"
        class="w-full p-3 border rounded-md placeholder-gray-400"
      />
    </div>

    <div>
      <label class="block mb-2 font-semibold">Subject <span class="text-red-500">*</span></label>
      <input
        type="text"
        name="subject"
        required
        placeholder="Please Be As Precise As Possible"
        class="w-full p-3 border rounded-md placeholder-gray-400"
      />
    </div>

    <div>
      <label class="block mb-2 font-semibold">Message <span class="text-red-500">*</span></label>
      <textarea
        name="message"
        rows="5"
        required
        placeholder="Message"
        class="w-full p-3 border rounded-md placeholder-gray-400"
      ></textarea>
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        Send
      </button>
    </div>
  </form>
</section>






</template>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
