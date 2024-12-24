<template>
  <div>
    <Header />
    
    <main style="margin-left: 10%; margin-right: 10%;" class="min-h-screen">
      <NuxtPage />
    </main>
    
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
