<template>
  <div class="container mx-auto mt-20">
    <h1>Ini adalah halaman jadwal</h1>
    <p>{{ result }}</p>
  </div>
</template>

<script setup lang="ts">
const result = await $fetch("/api/hello");
</script>
