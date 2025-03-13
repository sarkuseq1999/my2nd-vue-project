<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="text-center p-5 bg-gray-700 text-white text-base">
    <!-- Disclaimer at the top (rounded border, centered, fixed width) -->
    <div class="my-[10px] p-3 max-w-[1000px] mx-auto border border-white rounded-lg text-xl">
      *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
    </div>

    <!-- Links below the disclaimer using Vue Router, separated by bars -->
    <p class="my-[10px]">
      <router-link class="underline mx-[5px]" to="/privacy-notice">Privacy Notice</router-link> |
      <router-link class="underline mx-[5px]" to="/terms-and-conditions">Terms and Conditions</router-link> |
      <router-link class="underline mx-[5px]" to="/return-policy">Return Policy</router-link> |
      <router-link class="underline mx-[5px]" to="/opportunity">Opportunity</router-link> |
      <router-link class="underline mx-[5px]" to="/career">Career</router-link>
    </p>

    <!-- Copyright -->
    <p>© {{ currentYear }} BiGH Corporation. All Rights Reserved.</p>
  </footer>
</template>

