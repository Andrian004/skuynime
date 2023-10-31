<template>
  <div class="flex justify-center items-center min-h-screen">
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware: "auth",
});
</script>
