<template>
  <div class="mt-16">
    <div class="hero flex justify-center items-center">
      <form
        @submit.prevent="searchAnime"
        @keyup.enter="searchAnime"
        class="flex w-full justify-center items-center p-2"
      >
        <input
          class="rounded text-xl p-2 w-full sm:w-[35rem]"
          type="text"
          placeholder="Search"
          @change="(e) => (searchValue = e.target.value)"
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
        class="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"
      >
        <h2 class="mb-4 font-bold text-4xl text-center">
          {{ searchValue === "" ? "Playlist Terbaru" : "Hasil Pencarian" }}
        </h2>
        <hr />
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          v-if="loading"
        >
          <PulseLoad v-for="(e, i) in array" :key="i" />
        </div>

        <div
          v-else
          class="grid grid-cols-1 gap-x-6 gap-y-10 mt-5 mb-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <CardAnime v-for="anime in res" :key="anime.mal_id" :anime="anime" />
        </div>

        <Pagination :data="pagination" :loading="loading" :path="apiPath" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { res, loading, pagination, fetchApi } = useFetching();
const array: number[] = [1, 2, 3, 4, 5, 6];
const searchValue = ref("");
const apiPath = ref("");

onMounted(() => {
  // fetchApi(path: string, method: string, body?(optional): {})
  fetchApi("v4/seasons/now", "GET");
  apiPath.value = "v4/seasons/now?";
});

const searchAnime = () => {
  if (searchValue.value === "") {
    fetchApi("v4/seasons/now", "GET");
    apiPath.value = "v4/seasons/now?";
  } else {
    fetchApi(`v4/anime?q=${searchValue.value}`, "GET");
    apiPath.value = `v4/anime?q=${searchValue.value}&`;
  }
};
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
