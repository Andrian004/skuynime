<template>
  <div class="mt-16">
    <div class="hero flex justify-center items-center">
      <form>
        <input
          class="rounded text-xl p-2 w-96"
          type="text"
          placeholder="Search"
        />
        <button
          class="ms-2 text-xl rounded bg-amber-500 p-2 text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>

    <div class="content">
      <div
        class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"
      >
        <h2 class="mb-4 font-bold text-4xl text-center">Playlist Terbaru</h2>
        <hr />
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          v-if="loading"
        >
          <PulseLoad v-for="(e, i) in array" :key="i" />
        </div>

        <div
          v-else
          class="grid grid-cols-1 gap-x-6 gap-y-10 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <CardAnime v-for="anime in res" :key="anime.mal_id" :anime="anime" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { res, loading, fetchApi } = useFetching();
const array: number[] = [1, 2, 3, 4, 5, 6];

onMounted(() => {
  // fetchApi(path: string, method: string, body?(optional): {})
  fetchApi("v4/seasons/now", "GET");
  console.log(res);
});
</script>

<style scoped>
.hero {
  width: 100%;
  height: 300px;
  background: url("../assets/images/anime-list.jpg");
  background-repeat: repeat-x;
  background-size: contain;
}
</style>
