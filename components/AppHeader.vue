<template>
  <header class="bg-zinc-800 fixed top-0 w-full z-50">
    <div class="container mx-auto flex justify-between text-white py-5 px-2">
      <h1 class="brand text-2xl font-bold">kuynime</h1>
      <button class="sm:hidden" @click="togle">
        <Icon name="zondicons:menu" color="white" size="2rem" />
      </button>
      <div class="hidden sm:flex justify-center gap-4">
        <NuxtLink
          v-for="(route, i) in routes"
          :key="i"
          class="hover:text-sky-600 hover:underline"
          :to="route.path"
          >{{ route.name }}</NuxtLink
        >
      </div>

      <div
        class="flex flex-col gap-4 text-black sm:hidden"
        :class="show ? 'show-on' : 'show-off'"
      >
        <div class="flex justify-between items-center">
          <h1 class="brand text-2xl font-bold">kuynime</h1>
          <button @click="togle">
            <Icon name="zondicons:close" color="black" size="2rem" />
          </button>
        </div>
        <hr />
        <NuxtLink
          @click="togle"
          v-for="(route, i) in routes"
          :key="i"
          class="hover:text-sky-600 hover:underline"
          :to="route.path"
          >{{ route.name }}
        </NuxtLink>
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

const show = ref(false);

const togle = () => {
  show.value = !show.value;
};
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

.show-off,
.show-on {
  position: absolute;
  background: white;
  width: 400px;
  height: 100vh;
  top: 0;
  padding: 10px;
  transition: 0.3s ease-in-out;
}

.show-on {
  right: 0;
}

.show-off {
  right: -200%;
}

@media screen and (max-width: 400px) {
  .show-on {
    width: 300px;
  }
}
</style>
