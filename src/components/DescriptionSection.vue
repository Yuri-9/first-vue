<template>
  <section class="wrapper">
    <FilmDescription :film="film" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import FilmDescription from '@/components/FilmDescription.vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'component-description-section',
  components: { FilmDescription },
  props: {
    film: { type: Object as PropType<IFilm>, required: true },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  background-color: $black-transparent;
  backdrop-filter: blur(3px);
  padding: 45px 120px 100px;
}
</style>
