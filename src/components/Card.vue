<template>
  <div data-test="card-film" class="card" @click="onClick" @keydown.enter="onClick" tabindex="0">
    <ImageWithLoader :src="imageUrl" :alt="film.title" />
    <div class="summary">
      <h2 data-test="card-title">{{ film.title }}</h2>
      <p data-test="card-year" class="year">{{ year }}</p>
    </div>
    <p data-test="card-genre" class="genre">{{ showGenres }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { IFilm } from '@/types/film';
import { ImageWithLoader } from '@/components';
import { getYear } from '@/utils/date';

export default defineComponent({
  name: 'component-card',
  components: {
    ImageWithLoader,
  },
  props: {
    film: { type: Object as PropType<IFilm>, required: true },
  },
  methods: {
    onClick() {
      this.$emit('onClick', this.film.id);
    },
  },
  computed: {
    showGenres() {
      return this.film.genres.join(' & ');
    },
    imageUrl() {
      return this.film.poster_path;
    },
    year() {
      return getYear(this.film.release_date);
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  cursor: pointer;
}
.summary {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
}

.year {
  border: 1px solid;
  padding: 2px 14px;
  border-radius: 5px;
  line-height: 22px;
}

.title {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 300;
}
.genre {
  margin-top: 20px;
  align-self: flex-start;
  text-align: left;
}
</style>
