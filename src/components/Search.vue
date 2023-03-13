<template>
  <form class="container" @submit.prevent="onSearch">
    <label class="label" aria-label="search">
      <input
        type="text"
        name="search_input"
        class="input"
        placeholder="Search"
        @input="handleChange($event)"
        :value="searchValue"
        data-test="input-search"
      />
      <SearchSvg v-if="!searchValue" class="svg" data-test="svg-search" />
    </label>
    <Button type="submit" v-if="searchValue" data-test="button-search">Search</Button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/Button.vue';
import SearchSvg from '@/components/svg/SearchSvg.vue';

export default defineComponent({
  name: 'component-search',
  components: { Button, SearchSvg },
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.searchValue);
    },
    handleChange(e: Event) {
      const { value } = e.target as HTMLInputElement;
      this.searchValue = value;
      if (!value) {
        this.$emit('onSearch', '');
      }
    },
  },
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 58px;
}

.label {
  flex: 1 1 200px;
  height: 85%;
  display: flex;
  position: relative;
  -webkit-box-shadow: 0px 1px 13px 9px rgba(20, 20, 20, 1);
  -moz-box-shadow: 0px 1px 13px 9px rgba(20, 20, 20, 1);
  box-shadow: 0px 1px 13px 9px rgba(20, 20, 20, 1);
  & .input {
    height: 100%;
    flex-grow: 1;
    border-width: 0px;
    padding: 0 0 0 20px;
    background-color: $gray-900;
    color: $white;
    font-size: 20px;
    border-radius: 8px;
  }
  & .svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
