<template>
  <section class="wrapper">
    <ul class="card-container">
      <li v-for="film in films" :key="film.id">
        <Card :film="film" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import Card from '@/components/Card.vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'component-result-section',
  components: { Card },

  props: {
    total: Number,
    films: { type: Object as PropType<IFilm[]>, required: true },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  padding: 15px 120px;
  background-color: $gray-800;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  list-style-type: none;
}
</style>
