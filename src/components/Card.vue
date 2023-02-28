<template>
  <div class="card" @click="onClick" @keydown.enter="onClick" tabindex="0">
    <img class="image" :src="imageUrl" :alt="film.title" />
    <div class="summary">
      <h2>{{ film.title }}</h2>
      <p class="year">{{ film.year }}</p>
    </div>
    <p class="range">{{ showGenres }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'component-card',
  props: {
    film: { type: Object as PropType<IFilm>, required: true },
  },
  methods: {
    onClick() {
      this.$emit('OnClick', this.film.id);
    },
  },
  computed: {
    showGenres() {
      return this.film.genre.join(' & ');
    },
    imageUrl() {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`@/assets/images/${this.film.url}`);
    },
  },
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: fit-content;
  gap: 10px;
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
