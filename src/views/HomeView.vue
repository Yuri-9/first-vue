<template>
  <router-view></router-view>
  <TotalSection :total="films.length" />
  <Suspense>
    <template #default>
      <ResultSection :films="films" />
    </template>
    <template #fallback>
      <p class="loading">Loading...</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TotalSection from '@/components/TotalSection.vue';
import ResultSection from '@/components/ResultSection.vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'HomeView',
  components: {
    TotalSection,
    ResultSection,
  },
  data() {
    return {
      searchBy: 'title',
    };
  },
  computed: {
    films(): IFilm[] {
      return this.$store.getters.searchedFilms;
    },
  },
});
</script>
<style lang="scss">
.loading {
  flex: 1;
  padding-top: 50px;
  font-size: 20px;
  background-color: $gray-800;
}
</style>
