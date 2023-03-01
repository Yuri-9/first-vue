<template>
  <SearchSection />
  <TotalSection :total="totalCount" />
  <ResultSection :films="films" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchSection from '@/components/SearchSection.vue';
import TotalSection from '@/components/TotalSection.vue';
import ResultSection from '@/components/ResultSection.vue';
import films from '@/store/films.json';

export default defineComponent({
  name: 'HomeView',
  components: {
    SearchSection,
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
      films,
    };
  },
  computed: {
    totalCount() {
      return films.length;
    },
  },
  methods: {
    setSearchBy(id: string) {
      console.log('id');

      this.searchBy = id;
    },
    handleSearch(searchValue: string) {
      console.log('searchValue', searchValue);
    },
  },
});
</script>
