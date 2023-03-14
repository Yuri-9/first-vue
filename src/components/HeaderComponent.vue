<template>
  <header class="header">
    <Logo />
    <SearchSVG v-if="!!selectedFilm" class="icon-search" @click="onSearchClick" />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Logo from '@/components/Logo.vue';
import SearchSVG from '@/assets/search.svg';
import { useStore } from '@/store';

const store = useStore();
const selectedFilm = computed(() => store.getters.selectedFilm);

const onSearchClick = () => {
  store.dispatch('setSelectedFilmId', null);
};
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
