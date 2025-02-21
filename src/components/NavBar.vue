<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Track whether the dropdown is open
const isDropdownOpen = ref(false);
let closeTimeout = null; // Store the timeout reference

// Open the dropdown instantly
const openDropdown = () => {
  clearTimeout(closeTimeout); // Clear any existing timeout
  isDropdownOpen.value = true;
};

// Close the dropdown after 1 second
const closeDropdown = () => {
  closeTimeout = setTimeout(() => {
    isDropdownOpen.value = false;
  }, 1000); // 1 second delay
};

// Cancel the close if the mouse returns
const cancelClose = () => {
  clearTimeout(closeTimeout);
};

// Track scroll position to control transparency
const isScrolled = ref(false);

// Check if page is scrolled
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0; // True when page is scrolled
};

// Set up event listeners when component is mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// Clean up event listeners when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Track mobile menu state (hamburger)
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Track mobile dropdown state (Products)
const isMobileDropdownOpen = ref(false);
const toggleMobileDropdown = () => {
  isMobileDropdownOpen.value = !isMobileDropdownOpen.value;
};
</script>

<template>
  <!-- ✅ Sticky Navigation Menu with Transparent Effect -->
  <nav :class="['p-4 shadow-lg sticky top-0 z-50 transition-all duration-300', isScrolled ? 'bg-blue-600/50 backdrop-blur-md' : 'bg-blue-600']">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">My Fancy Site</h1>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" class="hover:text-yellow-400 transition-colors">Home</a></li>

        <!-- ✅ Dropdown for Desktop -->
        <li class="relative group"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown">
          <div>
            <button class="hover:text-yellow-400 transition-colors">Products</button>

            <transition name="dropdown">
              <div v-if="isDropdownOpen"
                   class="absolute -left-30 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                   style="background-image: url('https://via.placeholder.com/300'); background-size: cover; background-position: center;"
                   @mouseenter="cancelClose"
                   @mouseleave="closeDropdown">
                <div class="grid grid-cols-1 gap-4 p-4 bg-white/90">
                  <div class="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <img src="https://via.placeholder.com/50" alt="Product 1" class="rounded-lg">
                    <a href="#" class="text-gray-700 font-semibold">Product 1</a>
                  </div>

                  <div class="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <img src="https://via.placeholder.com/50" alt="Product 2" class="rounded-lg">
                    <a href="#" class="text-gray-700 font-semibold">Product 2</a>
                  </div>

                  <div class="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <img src="https://via.placeholder.com/50" alt="Product 3" class="rounded-lg">
                    <a href="#" class="text-gray-700 font-semibold">Product 3</a>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </li>

        <li><a href="#" class="hover:text-yellow-400 transition-colors">About</a></li>
        <li><a href="#" class="hover:text-yellow-400 transition-colors">Support</a></li>
      </ul>

      <!-- ✅ Mobile Hamburger Icon -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="focus:outline-none">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- ✅ Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="md:hidden bg-blue-600/90 text-white p-4">
        <ul class="space-y-4">
          <li><a href="#" class="block hover:text-yellow-400" @click="closeMobileMenu">Home</a></li>
          <li>
            <button @click="toggleMobileDropdown" class="w-full text-left hover:text-yellow-400">Products</button>
            <transition name="dropdown">
              <div v-if="isMobileDropdownOpen" class="grid grid-cols-1 gap-4 p-2">
                <div class="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                  <img src="https://via.placeholder.com/50" alt="Product 1" class="rounded-lg">
                  <a href="#" class="text-gray-700 font-semibold" @click="closeMobileMenu">Product 1</a>
                </div>

                <div class="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                  <img src="https://via.placeholder.com/50" alt="Product 2" class="rounded-lg">
                  <a href="#" class="text-gray-700 font-semibold" @click="closeMobileMenu">Product 2</a>
                </div>

                <div class="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                  <img src="https://via.placeholder.com/50" alt="Product 3" class="rounded-lg">
                  <a href="#" class="text-gray-700 font-semibold" @click="closeMobileMenu">Product 3</a>
                </div>
              </div>
            </transition>
          </li>
          <li><a href="#" class="block hover:text-yellow-400" @click="closeMobileMenu">About</a></li>
          <li><a href="#" class="block hover:text-yellow-400" @click="closeMobileMenu">Support</a></li>
        </ul>
      </div>
    </transition>
  </nav>

  <!-- Example long content to see sticky effect -->
  <div class="h-[2000px] p-10">
    <h2 class="text-3xl font-bold mb-4">Scroll down to see the transparent menu!</h2>
    <p>This is just some long content for testing the sticky navigation bar. Keep scrolling to see the menu become transparent.</p>
  </div>
</template>

<style scoped>
/* Dropdown fade effect */
.dropdown-enter-active, .dropdown-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile menu transition */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.5s ease;
}
.mobile-menu-enter-from, .mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>









