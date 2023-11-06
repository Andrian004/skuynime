<template>
  <div class="container mx-auto mt-20 px-2">
    <div
      class="p-6 bg-amber-500 flex justify-between items-center flex-wrap gap-2 rounded text-white mb-2"
    >
      <h1 class="font-bold text-4xl m-0 p-0">Jadwal Tayang</h1>
      <h1 class="font-bold text-2xl m-0 p-0 sm:text-3xl">
        {{ day }} | {{ hour }} : {{ minute }} : {{ second }}
      </h1>
    </div>

    <div class="w-full flex gap-2 items-center">
      <select
        name="days"
        id="selectDays"
        class="p-2 bg-zinc-300 rounded"
        @change="(e) => getAnime(e.target.value)"
      >
        <option value="" selected disabled>Pilih hari</option>
        <option value="monday">Senin</option>
        <option value="tuesday">Selasa</option>
        <option value="wednesday">Rabu</option>
        <option value="thursday">Kamis</option>
        <option value="friday">Jum'at</option>
        <option value="saturday">Sabtu</option>
        <option value="sunday">Minggu</option>
      </select>
      <select name="categories" id="selectCat" class="p-2 bg-zinc-300 rounded">
        <option value="" selected disabled>Kategori</option>
        <option value="false">Semua</option>
        <option value="true">Anak-anak</option>
      </select>
    </div>

    <div class="content">
      <div
        class="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8"
      >
        <div
          v-if="loading"
          class="grid grid-cols-1 gap-x-6 gap-y-10 mt-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
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
      <Pagination :data="pagination" :loading="loading" :path="apiPath" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { res, loading, pagination, fetchApi } = useFetching();
const array = [1, 2, 3, 4, 5, 6];
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const daysIng = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const apiPath = ref("");

const today = daysIng[new Date().getDay()];
const day = ref<string>("");
const hour = ref<number>(0);
const minute = ref<number>(0);
const second = ref<number>(0);

setInterval(() => {
  const dates = new Date();
  day.value = days[dates.getDay()];
  hour.value = dates.getHours();
  minute.value = dates.getMinutes();
  second.value = dates.getSeconds();
});

onMounted(() => {
  fetchApi(`v4/schedules?filter=${today}`, "GET");
  apiPath.value = `v4/schedules?filter=${today}&`;
});

const getAnime = (value: string): void => {
  fetchApi(`v4/schedules?filter=${value}`, "GET");
  apiPath.value = `v4/schedules?filter=${value}&`;
};
</script>
