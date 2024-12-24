<template>
  <header class="bg-white sticky top-0 z-50 shadow-md">
    <div class="container mx-auto flex items-center justify-between px-20 py-4">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <img src="~assets/image/logo.png" alt="Logo" class="h-8 w-8" />
        <span class="text-lg font-bold">Wisata App</span>
      </div>

      <!-- Search Bar -->
      <div class="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Fairmont Jakarta · 4 – 8 Mar 2025"
          class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <!-- Sign In Button -->
      <button
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Sign in
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  margin: 0 auto;
}
</style>