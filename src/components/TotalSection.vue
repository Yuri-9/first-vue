<template>
  <section class="wrapper">
    <p class="total" data-test="total-count">{{ totalCount }}</p>
    <div class="pagination">
      <button :disabled="isPrevDisable" @click="toPrevPage" class="button">&lt;</button>
      <p v-if="totalPages > 1">{{ page }} page</p>
      <button :disabled="page >= totalPages" @click="toNextPage" class="button">></button>
    </div>

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
  data() {
    return {
      options: sortByOptions,
    };
  },
  methods: {
    setSortBy(sortBy: SortByIDs) {
      this.$store.dispatch('setSortBy', sortBy);
    },
    toNextPage() {
      if (!this.isNextDisable) {
        this.$store.dispatch('setPage', +this.page + 1);
        this.$router.push({ path: this.$route.path, query: { page: this.page } });
      }
    },
    toPrevPage() {
      if (!this.isPrevDisable) {
        this.$store.dispatch('setPage', this.page - 1);
        this.$router.push({ path: this.$route.path, query: { page: this.page } });
      }
    },
  },
  computed: {
    totalCount() {
      const totalFilms = this.$store.getters.searchedFilms.length;
      return totalFilms ? `${totalFilms} movies found` : '';
    },
    selectedOption() {
      return this.$store.state.sortBy;
    },
    totalPages() {
      return Math.ceil(this.$store.getters.searchedFilms.length / 10);
    },
    page() {
      return this.$store.state.page;
    },
    isPrevDisable() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.page <= 1;
    },
    isNextDisable() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.page >= this.totalPages;
    },
  },
  mounted() {
    const { page } = this.$route.query;
    console.log(this.$route.query);

    if (page !== null && typeof +page === 'number' && !Number.isNaN(page)) {
      console.log('page1', page, this.totalPages);

      this.$store.dispatch('setPage', page);
    }
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

.pagination {
  display: flex;
  gap: 20px;
}
.button {
  cursor: pointer;
}
</style>
