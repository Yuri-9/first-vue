<template>
  <header class="header">
    <Logo />
    <router-link to="/" v-if="hasSelectedFilm">
      <SearchSvg data-test="header-search-svg" class="icon-search" />
    </router-link>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Logo from '@/components/Logo.vue';
import SearchSvg from '@/components/svg/SearchSvg.vue';

const route = useRoute();

const hasSelectedFilm = computed(() => route.params.id);
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  position: relative;
  z-index: 2;
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
