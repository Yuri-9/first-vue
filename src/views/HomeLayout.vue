<template>
  <HeaderComponent />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
    Footer,
  },
});
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  position: relative;
  padding-top: 60px;
  top: -60px;
  margin-bottom: -60px;
  z-index: 1;
  flex-direction: column;
  min-height: calc(100vh - 195px);
  background-image: url('/public/wrapper.jpeg');
  background-size: 100% auto;
}
</style>
