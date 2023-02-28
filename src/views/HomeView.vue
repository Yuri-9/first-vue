<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button name="search">Search</Button>
    <Switcher title="Search by" :options="filters" @onSelect="setSearchBy" />
    <Search @onSearch="handleSearch" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';
import Switcher from '@/components/Switcher.vue';
import Search from '@/components/Search.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Button,
    Switcher,
    Search,
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
  },
});
</script>
