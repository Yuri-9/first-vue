<template>
  <section class="wrapper">
    <p v-if="!films.length" class="title">No films found</p>
    <ul v-else class="cards-container">
      <li v-for="film in films" :key="film.id" class="cards-item">
        <Card :film="film" @onClick="onSelectFilm" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Card from '@/components/Card.vue';
import { useStore } from '@/store';
import FilmsService from '@/api/films';

const store = useStore();
const router = useRouter();

const onSelectFilm = (filmId: string) => {
  router.push({ name: 'films', params: { id: filmId }, query: { name: 'tt' } });
};
const films = computed(() => store.getters.searchedFilms);

await FilmsService.getFilms().then((filmsResponse) => store.dispatch('setFilms', filmsResponse));
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 100%;
  padding: 15px 120px;
  background-color: $gray-800;
  @include big-tablet-down {
    padding: 15px 60px;
  }
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  list-style-type: none;
}

.cards-item {
  flex: 1 1 320px;
  min-width: 300px;
  max-width: 400px;
}

.title {
  font-size: 40px;
}
</style>
