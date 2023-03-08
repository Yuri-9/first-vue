<template>
  <div class="card" @click="onClick" @keydown.enter="onClick" tabindex="0">
    <ImageWithLoader :src="imageUrl" :alt="film.title" />
    <div class="summary">
      <h2>{{ film.title }}</h2>
      <p class="year">{{ film.release_date }}</p>
    </div>
    <p class="range">{{ showGenres }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { IFilm } from '@/types/film';
import { ImageWithLoader } from '@/components';

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
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
}
.summary {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  min-height: 400px;
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
.range {
  align-self: flex-start;
}
</style>
