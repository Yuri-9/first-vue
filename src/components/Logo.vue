<template>
  <a href="#" class="logo">
    <img class="logo-image" :src="require(`@/assets/logo.png`)" alt="Netflix roulette" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'component-logo',
});
</script>

<style scoped lang="scss">
.logo {
  width: 155px;
  height: 25px;
  &-image {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
