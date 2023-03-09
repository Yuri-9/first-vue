<template>
  <section class="wrapper">
    <h1 class="search_title">FIND YOUR MOVE</h1>
    <Search @onSearch="onSearch" />
    <Switcher title="Search by" :options="filters" @onSelect="setSearchBy" :selectedOption="selectedOption" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Search from '@/components/Search.vue';
import Switcher from '@/components/Switcher.vue';
import { searchByOptions } from '@/types/filters';
import type { SearchByIds } from '@/types/filters';

export default defineComponent({
  name: 'component-search-section',
  components: { Search, Switcher },
  data() {
    return {
      filters: searchByOptions,
    };
  },
  methods: {
    onSearch(searchValue: string) {
      this.$emit('onSearch', searchValue);
    },
    setSearchBy(searchBy: SearchByIds) {
      this.$store.dispatch('setSearchBy', searchBy);
    },
  },
  computed: {
    selectedOption() {
      return this.$store.state.searchBy;
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
