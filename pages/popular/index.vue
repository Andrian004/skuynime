<template>
  <div class="container mx-auto mt-20 px-2">
    <h1 class="text-2xl font-medium mb-4">Daftar anime teratas:</h1>
    <hr />
    <div
      v-if="loading"
      class="w-full h-full flex justify-center items-center pt-60"
    >
      <LoadingApp />
    </div>
    <div v-else>
      <CardClass :data="res" />
      <Pagination :data="pagination" :loading="loading" path="v4/top/anime?" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { res, loading, pagination, fetchApi } = useFetching();

onMounted(() => {
  // fetchApi(path: string, method: string, body?: {})
  fetchApi("v4/top/anime", "GET");
});
</script>
