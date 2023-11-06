<template>
  <div class="container flex flex-col sm:flex-row min-h-screen mx-auto mt-20">
    <div class="basis-full sm:basis-1/2">
      <div v-if="!loading">
        <picture class="flex justify-center">
          <source
            media="(min-width: 1024px)"
            :srcset="res.images.jpg.large_image_url"
          />
          <img :src="res.images.jpg.image_url" alt="..." class="rounded" />
        </picture>
      </div>
      <div v-else class="flex justify-center">
        <div
          class="animate-pulse bg-slate-400 w-[14rem] lg:w-[27rem] h-[20rem] lg:h-[38rem] rounded"
        ></div>
      </div>
    </div>
    <div class="basis-full sm:basis-1/2 p-2">
      <h1 class="text-3xl font-bold mb-3 text-center sm:text-start">
        {{ res.title }}
      </h1>
      <table v-if="!loading" class="table-auto">
        <tbody>
          <tr>
            <td>Judul</td>
            <td>: {{ res.title }}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>: {{ res.type }}</td>
          </tr>
          <tr>
            <td>Episode</td>
            <td>: {{ res.episodes }}</td>
          </tr>
          <tr>
            <td>Durasi</td>
            <td>: {{ res.duration }}</td>
          </tr>
          <tr>
            <td>Studio</td>
            <td>: {{ res.studios[0].name }}</td>
          </tr>
          <tr>
            <td>Score</td>
            <td>: {{ res.score }}</td>
          </tr>
          <tr>
            <td>Musim</td>
            <td>: {{ res.season }}</td>
          </tr>
          <tr>
            <td>Tahun</td>
            <td>: {{ res.year }}</td>
          </tr>
          <tr>
            <td>Sumber</td>
            <td>: {{ res.source }}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>: {{ res.status }}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td class="flex">
              :
              <p v-for="genre in res.genres" :key="genre.mal_id" class="ms-1">
                {{ genre.name + "," }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mt-3">
        <div class="head flex my-3">
          <button
            @click="getSynopsis"
            class="hover:text-amber-600"
            :class="
              synopsis
                ? 'border-b-4 border-amber-500 p-2'
                : 'border-b-4 border-zinc-800 p-2'
            "
          >
            Synopsis
          </button>
          <button
            @click="getTrailer"
            class="hover:text-amber-600"
            :class="
              trailer
                ? 'border-b-4 border-amber-500 p-2'
                : 'border-b-4 border-zinc-800 p-2'
            "
          >
            Trailer
          </button>
          <button
            @click="getAnimeVideos"
            class="hover:text-amber-600"
            :class="
              stream
                ? 'border-b-4 border-amber-500 p-2'
                : 'border-b-4 border-zinc-800 p-2'
            "
          >
            Streaming
          </button>
        </div>
        <div class="body">
          <p v-show="synopsis">
            {{ res.synopsis }}
          </p>
          <div v-show="trailer">
            <div v-if="!loading">
              <LiteYouTubeEmbed
                :id="res.trailer.youtube_id"
                :title="res.title"
              />
            </div>
          </div>
          <div v-show="stream">
            <p class="mb-2">
              Mohon maaf saat ini kami belum menyediakan layanan streaming. Jika
              anda ingin menonton, kami merekomendasikan platform berikut:
            </p>
            <ul>
              <li v-for="(list, i) in res.streaming" :key="i">
                <a :href="list.url" class="hover:underline hover:text-sky-800"
                  >• {{ list.name }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

const { res, loading, fetchApi } = useFetching();

const route = useRoute();
const anime_id = route.params.id;
const stream = ref(false);
const synopsis = ref(true);
const trailer = ref(false);

onMounted(() => {
  fetchApi(`v4/anime/${anime_id}/full`, "GET");
});

const getAnimeVideos = () => {
  stream.value = !stream.value;
  synopsis.value = false;
  trailer.value = false;
};

const getSynopsis = () => {
  synopsis.value = !synopsis.value;
  stream.value = false;
  trailer.value = false;
};

const getTrailer = () => {
  trailer.value = !trailer.value;
  stream.value = false;
  synopsis.value = false;
};
</script>
