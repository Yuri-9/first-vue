<template>
  <div v-scrollIntoView class="about-film_wrapper">
    <figure class="image-container">
      <img class="image" :src="imageUrl" :alt="film.title" />
    </figure>
    <div class="summary">
      <div class="summary-header">
        <h1 class="summary-header_title">{{ film.title }}</h1>
        <span class="summary-header_rating">{{ film.rating }}</span>
      </div>
      <p class="range">{{ showGenres }}</p>
      <p class="addition">
        <span> {{ film.year }}</span>
        <span> {{ showDuration }}</span>
      </p>
      <p class="description">{{ film.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'component-FilmDescription',
  props: {
    film: { type: Object as PropType<IFilm>, required: true },
  },
  computed: {
    showGenres() {
      return this.film.genre.join(' & ');
    },
    showDuration() {
      return `${this.film.duration} min`;
    },
    imageUrl() {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`@/assets/images/${this.film.url}`);
    },
  },
});
</script>

<style scoped lang="scss">
.about-film_wrapper {
  display: flex;
  width: 100%;
  min-height: 400px;
  gap: 60px;
}

.image-container {
  width: 100%;
  flex: 0 0 285px;
}
.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.summary {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &-header {
    display: flex;
    align-items: center;
    gap: 20px;
    &_rating {
      border: 1px solid $white;
      border-radius: 50%;
      padding: 18px;
      font-size: 28px;
      color: $light-green;
      font-weight: 100;
    }
  }
}
.addition {
  display: flex;
  gap: 50px;
  color: $coral;
  font-size: 26px;
  margin-top: 25px;
}

.description {
  font-weight: 300;
  text-align: start;
  font-size: 18px;
  margin-top: 25px;
  max-width: 90%;
  line-height: 26px;
}
.range {
  align-self: flex-start;
}
</style>
