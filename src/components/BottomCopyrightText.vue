<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="copyright">
    <p>© {{ currentYear }} BiGH Corporation. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
.copyright {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
  font-size: 14px;
}
</style>