<template>
  <SearchSection v-if="!selectedFilm" @onSearch="handleSearch" />
  <DescriptionSection v-else :film="selectedFilm" />
  <TotalSection :total="films.length" />
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
  mounted() {
    this.$store.dispatch('getFilms');
  },
});
</script>
