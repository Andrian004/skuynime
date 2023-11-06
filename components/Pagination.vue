<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex justify-between w-full">
      <button
        @click="prev(data.current_page, path)"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </button>
      <div class="hidden sm:flex justify-center items-center">
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">{{
            !loading ? data.current_page : 0
          }}</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">{{
            !loading ? data.last_visible_page : 0
          }}</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">{{ !loading ? data.items.total : 0 }}</span>
          {{ " " }}
          results
        </p>
      </div>
      <button
        v-show="data.has_next_page"
        @click="next(data.current_page, path)"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const items: number[] = [1, 2, 3];
const { fetchApi } = useFetching();

defineProps({
  data: {
    type: Object,
    default: {},
  },
  loading: {
    type: Boolean,
    default: true,
  },
  path: {
    type: String,
    default: "",
  },
});

const prev = (current: number, path: String): void => {
  if (current === 1) return;
  fetchApi(`${path}page=${current - 1}`, "GET");
  window.scrollTo(0, 0);
};

const next = (current: number, path: String): void => {
  fetchApi(`${path}page=${current + 1}`, "GET");
  window.scrollTo(0, 0);
};
</script>

<style></style>
