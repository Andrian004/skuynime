<template>
  <header class="bg-zinc-800 fixed top-0 w-full z-50">
    <div class="container mx-auto flex justify-between text-white py-5">
      <h1 class="brand text-2xl font-bold">kuynime</h1>
      <div class="flex justify-center gap-4">
        <NuxtLink
          v-for="(route, i) in routes"
          :key="i"
          class="hover:text-sky-600 hover:underline"
          :to="route.path"
          >{{ route.name }}</NuxtLink
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Routes {
  name: string;
  path: string;
}

const routes: readonly Routes[] = [
  { name: "Home", path: "/" },
  { name: "Peringkat", path: "/popular" },
  { name: "Jadwal", path: "/schedule" },
  { name: "Diskusi", path: "/discussion" },
  { name: "Login", path: "/login" },
];
</script>

<style scoped>
h1.brand::before {
  content: "S";
  padding: 0 10px;
  background-color: rgb(255, 157, 0);
  border-radius: 50%;
}

.router-link-exact-active {
  color: rgb(255, 157, 0);
}
</style>
