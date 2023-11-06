<template>
  <a :href="'/popular/' + anime.mal_id" class="group">
    <div
      class="aspect-video aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
    >
      <img
        :src="anime.images.jpg.image_url"
        alt="..."
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-1 text-lg font-medium text-gray-900">{{ anime.title }}</h3>
    <div class="flex flex-wrap gap-1">
      <p
        class="rounded bg-slate-200 px-2 w-max"
        v-for="genre in anime.genres"
        :key="genre.mal_id"
      >
        {{ genre.name }}
      </p>
    </div>
    <p>⭐ {{ anime.score }}</p>
    <p class="mt-1 text-sm text-gray-700">{{ anime.broadcast.day }}</p>
  </a>
</template>

<script setup lang="ts">
defineProps({
  anime: {
    type: Object,
    default: {},
  },
});
</script>

<style></style>
