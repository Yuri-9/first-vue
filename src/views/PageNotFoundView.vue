<template>
  <HeaderComponent />
  <main class="main">
    <h1>404</h1>
    <h2>Page not found</h2>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'PageNotFoundView',
  components: { HeaderComponent },
});
</script>
<style lang="scss" scoped>
.main {
  flex: 1;
  height: calc(100vh - 230px);
  padding-top: 50px;
  background-color: $gray-800;
}
</style>
