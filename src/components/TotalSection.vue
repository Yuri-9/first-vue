<template>
  <section class="wrapper">
    <p class="total" data-test="total-count">{{ totalCount }}</p>
    <Switcher data-test="switcher-sort" title="Sort by" :options="options" @onSelect="setSortBy" :selectedOption="selectedOption" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SortByIDs, sortByOptions } from '@/types/filters';
import Switcher from '@/components/Switcher.vue';

export default defineComponent({
  name: 'component-total-section',
  components: { Switcher },
  props: {
    total: Number,
  },
  data() {
    return {
      options: sortByOptions,
    };
  },
  methods: {
    setSortBy(sortBy: SortByIDs) {
      this.$store.dispatch('setSortBy', sortBy);
    },
  },
  computed: {
    totalCount() {
      return this.total ? `${this.total} movies found` : '';
    },
    selectedOption() {
      return this.$store.state.sortBy;
    },
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $grey-400;
  padding: 15px 120px;
  @include big-tablet-down {
    padding: 15px 60px;
  }
}

.total {
  font-weight: 900;
}
</style>
