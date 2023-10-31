<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li
      class="flex justify-between gap-x-6 py-5"
      v-for="(anime, i) in data"
      :key="i"
    >
      <div class="flex min-w-0 gap-x-4">
        <img
          class="h-12 w-16 flex-none rounded bg-gray-50"
          :src="anime.images.jpg.small_image_url"
          alt=""
        />
        <div class="min-w-0 flex-auto">
          <NuxtLink
            :to="{ path: `/kelas/${anime.mal_id}` }"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            {{ anime.title }}
          </NuxtLink>
          <div class="flex gap-2 mt-1 w-full">
            <p
              v-for="genre in anime.genres"
              :key="genre.mal_id"
              class="text-xs text-gray-500"
            >
              {{ genre.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">Score: {{ anime.score }}</p>

        <p class="mt-1 text-xs leading-5 text-gray-500">
          {{ anime.status }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Array,
    default: [],
  },
});
</script>
