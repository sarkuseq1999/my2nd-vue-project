<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isDropdownOpen = ref(false);
let closeTimeout = null;

const openDropdown = () => {
  clearTimeout(closeTimeout);
  isDropdownOpen.value = true;
};
const closeDropdown = () => {
  closeTimeout = setTimeout(() => {
    isDropdownOpen.value = false;
  }, 500);
};
const cancelClose = () => clearTimeout(closeTimeout);

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <!-- Navigation Bar -->
<nav
  :class="[
    'py-10 px-25 absolute w-full z-50 transition-all duration-300',
    isScrolled ? 'top-0 bg-transparent' : 'top-0 bg-transparent'
  ]"
>
    <div class="container mx-auto relative flex items-center justify-between">
      <!-- Left: Menu -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link to="/" class="text-white font-bold hover:text-yellow-400 transition-colors">Home</router-link></li>
        <li class="group" @mouseenter="openDropdown" @mouseleave="closeDropdown">
          <button class="text-white font-bold hover:text-yellow-400 transition-colors">Products</button>
        </li>
        <li><router-link to="/about" class="text-white font-bold hover:text-yellow-400 transition-colors">About</router-link></li>
        <li><a href="#" class="text-white font-bold hover:text-yellow-400 transition-colors">Support</a></li>
      </ul>

      <!-- Center: Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <router-link to="/">
          <img src="/logo_white.png" alt="Site Logo" class="h-16" />
        </router-link>
      </div>

      <!-- Right: Login | Signup and Hamburger -->
      <div class="flex items-center space-x-4 md:space-x-6">
        <!-- Desktop Login/Signup -->
        <div class="hidden md:flex items-center space-x-2">
          <router-link to="/login" class="text-white font-bold hover:text-yellow-400 transition-colors">Login</router-link>
          <span class="text-white">|</span>
          <router-link to="/signup" class="text-white font-bold hover:text-yellow-400 transition-colors">Signup</router-link>
        </div>

        <!-- Mobile Hamburger Icon -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="focus:outline-none">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mega Menu Positioned Outside Nav Bar -->
  <transition name="dropdown">
    <div
      v-if="isDropdownOpen"
      class="absolute left-0 top-[120px] w-full bg-white/10 border-t border-black shadow-2xl p-6 backdrop-blur-md z-40"
      @mouseenter="cancelClose"
      @mouseleave="closeDropdown"
    >
      <div class="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div
          v-for="i in 8"
          :key="i"
          class="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow hover:shadow-md transition duration-300 cursor-pointer hover:bg-gray-100"
        >
          <img
            :src="`/images/nuricell_${i}.png`"
            :alt="`NuriCell ${i}`"
            class="w-20 h-20 object-contain mb-2"
          />
          <span class="text-sm font-semibold text-gray-700">NuriCell {{ i }}</span>
        </div>
      </div>
    </div>
  </transition>

  <!-- Spacer -->
  <div class="h-[80px]"></div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>























