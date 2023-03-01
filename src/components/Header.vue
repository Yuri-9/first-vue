<template>
  <header class="header">
    <Logo />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'component-header',
  components: { Logo },
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
</style>
