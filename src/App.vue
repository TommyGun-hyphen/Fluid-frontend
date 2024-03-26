<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue'
</script>


<template>
  <nav>
    <TopNav></TopNav>
  </nav>
  <main class="flex justify-center">
    <div class="container p-6">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
