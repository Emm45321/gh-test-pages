<template>

  <Navbar />

  <main>
    <RouterView/>
  </main>

</template>

<script setup lang='ts'>
  import Navbar from './components/Navbar/Navbar.vue';
  import { RouterView } from 'vue-router';
</script>