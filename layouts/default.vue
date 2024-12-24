<template>
    <div>
      <header class="p-4 bg-white shadow">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">Wisata App</h1>
          <button class="btn-primary">Sign in</button>
        </div>
      </header>
      <nuxt-page />
    </div>
  </template>
  
  <style scoped>
  .btn-primary {
    @apply bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600;
  }
  </style>
  