<template>
  <header class="header">
    <Logo />
    <SearchSVG v-if="!!selectedFilmId" class="icon-search" @click="onSearchClick" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';
import SearchSVG from '@/assets/search.svg';
import store from '@/store';

export default defineComponent({
  name: 'component-header',
  components: { Logo, SearchSVG },
  methods: {
    onSearchClick() {
      store.commit('setSelectedFilmId', null);
    },
  },
  computed: {
    selectedFilmId() {
      return store.getters.getSelectedFilmId;
    },
  },
});
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  background-color: $black-transparent;
  backdrop-filter: blur(3px);
  padding: 0 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-search {
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
