<template>
  <section class="wrapper">
    <FilmDescription v-if="!!selectedFilm" :film="selectedFilm" />
    <div v-else>Film not found</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FilmDescription from '@/components/FilmDescription.vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'component-description-section',
  components: { FilmDescription },

  computed: {
    selectedFilm(): IFilm {
      const filmId = +this.$route.params.id;
      return this.$store.getters.selectedFilm(filmId);
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  background-color: $black-transparent;
  backdrop-filter: blur(3px);
  padding: 45px 120px 100px;
  @include big-tablet-down {
    padding: 45px 60px 100px;
  }
}
</style>
