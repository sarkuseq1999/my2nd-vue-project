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

// Track scroll position to control transparency and position
const isScrolled = ref(false);

// Check if page is scrolled
const handleScroll = () => {
  isScrolled.value = window.scrollY > 40; // Moves navbar to top after scrolling past top bar
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
  <!-- ✅ Navigation Menu that moves to the very top on scroll -->
  <nav 
    :class="[
      'p-4 shadow-lg fixed w-full z-50 transition-all duration-300 border-2', 
      isScrolled ? 'top-0 bg-blue-200/20' : 'top-[40px] bg-blue-200'
    ]">
    
    <div class="container mx-auto flex justify-between items-center">
      
      <!-- ✅ Logo -->
      <router-link to="/">
        <img src="/logo_black.png" alt="Site Logo" class="h-15 ml-4">
      </router-link>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li><router-link to="/" class="hover:text-yellow-400 transition-colors">Home</router-link></li>

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

        <li><router-link to="/about" class="hover:text-yellow-400 transition-colors">About</router-link></li>
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
  </nav>

  <!-- ✅ Push down content so it’s not hidden under fixed navbar -->
  <div class="h-[80px]"></div>
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













