<template>
  <SearchSection v-if="!selectedFilm" @onSearch="handleSearch" />
  <DescriptionSection v-else :film="selectedFilm" />
  <TotalSection :total="films.length" />
  <Suspense>
    <template #default>
      <ResultSection :films="films" @onSelectFilm="handleSelectFilm" />
    </template>
    <template #fallback>
      <P class="loading">Loading...</P>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchSection from '@/components/SearchSection.vue';
import DescriptionSection from '@/components/DescriptionSection.vue';
import TotalSection from '@/components/TotalSection.vue';
import ResultSection from '@/components/ResultSection.vue';
import { IFilm } from '@/types/film';

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchSection,
    DescriptionSection,
    TotalSection,
    ResultSection,
  },
  data() {
    return {
      searchValue: '',
      searchBy: 'title',
    };
  },
  methods: {
    handleSelectFilm(filmId: number) {
      this.$store.dispatch('setSelectedFilmId', filmId);
    },
    handleSearch(searchValue: string) {
      this.searchValue = searchValue;
    },
  },
  computed: {
    totalCount() {
      return this.$store.getters.totalCountFilms;
    },
    selectedFilm(): IFilm {
      return this.$store.getters.selectedFilm;
    },

    films(): IFilm[] {
      return this.$store.getters.searchedFilms(this.searchValue);
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
