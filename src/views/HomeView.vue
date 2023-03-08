<template>
  <SearchSection v-if="!selectedFilm" />
  <DescriptionSection v-else :film="selectedFilm" />
  <TotalSection :total="totalCount" />
  <ResultSection :films="films" @onSelectFilm="handleSelectFilm" />
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
      filters: [
        {
          name: 'title',
          id: 'title',
        },
        {
          name: 'genre',
          id: 'genre',
        },
      ],
      searchBy: 'title',
    };
  },
  methods: {
    setSearchBy(id: string) {
      console.log('id');

      this.searchBy = id;
    },
    handleSearch(searchValue: string) {
      console.log('searchValue', searchValue);
    },
    handleSelectFilm(filmId: number) {
      this.$store.dispatch('setSelectedFilmId', filmId);
    },
  },
  computed: {
    totalCount() {
      return this.$store.getters.totalCountFilms;
    },
    selectedFilm(): IFilm {
      return this.$store.getters.selectedFilm;
    },
    films() {
      return this.$store.state.films;
    },
  },
});
</script>
