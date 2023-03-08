<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button name="search">Search</Button>
    <Switcher title="Search by" :options="filters" @onSelect="setSearchBy" />
    <Search @onSearch="handleSearch" />
    <Card :film="films[0]" />
    <FilmDescription :film="films[0]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';
import Switcher from '@/components/Switcher.vue';
import films from '@/store/films.json';

import Search from '@/components/Search.vue';
import Card from '@/components/Card.vue';
import FilmDescription from '@/components/FilmDescription.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Button,
    Switcher,
    Search,
    Card,
    FilmDescription,
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
