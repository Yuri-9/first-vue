<template>
  <section class="wrapper">
    <h1 class="search_title">FIND YOUR MOVE</h1>
    <Search @onSearch="handleSearch" />
    <Switcher title="Search by" :options="filters" @onSelect="setSearchBy" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from '@/components/Search.vue';
import Switcher from '@/components/Switcher.vue';

export default defineComponent({
  name: 'component-search-section',
  components: { Search, Switcher },
  data() {
    return {
      searchValue: '',
      searchBy: 'title',
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
    };
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.searchValue);
    },
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

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: $black-transparent;
  backdrop-filter: blur(3px);
  padding: 45px 120px 100px;
  gap: 14px;
  @include big-tablet-down {
    padding: 45px 60px 100px;
  }
}

.search_title {
  margin-bottom: 22px;
}
</style>
