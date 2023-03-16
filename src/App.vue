<template>
  <HeaderComponent />
  <main class="main">
    <router-view />
  </main>
  <Footer />
  <!-- <TestComponents /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import Footer from '@/components/Footer.vue';
// import TestComponents from '@/components//test/TestComponents.vue';

export default defineComponent({
  name: 'component-app',
  components: { HeaderComponent, Footer },
});
</script>

<style>
.footer {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 195px);
}
</style>
