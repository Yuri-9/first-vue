<template>
  <section class="wrapper">
    <ul class="cards-container">
      <li v-for="film in films" :key="film.id">
        <Card :film="film" @onClick="onSelectFilm" />
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
    films: { type: Object as PropType<IFilm[]>, required: true },
  },
  methods: {
    onSelectFilm(idFilm: string) {
      this.$emit('onSelectFilm', idFilm);
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
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
  align-items: center;
  gap: 60px;
  list-style-type: none;
}
</style>
