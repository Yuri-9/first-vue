<template>
  <section class="wrapper">
    <p class="total">{{ totalCount }}</p>
    <Switcher title="Sort by" :options="options" @onSelect="setSearchBy" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Switcher from '@/components/Switcher.vue';

export default defineComponent({
  name: 'component-total-section',
  components: { Switcher },
  props: {
    total: Number,
  },
  data() {
    return {
      searchValue: '',
      searchBy: 'release_date',
      options: [
        {
          name: 'Release date',
          id: 'release_date',
        },
        {
          name: 'Rating',
          id: 'rating',
        },
      ],
    };
  },
  methods: {
    setSearchBy(id: string) {
      console.log('id');

      this.searchBy = id;
    },
  },
  computed: {
    totalCount() {
      return `${this.total} movie found`;
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
