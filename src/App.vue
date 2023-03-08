<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import Footer from '@/components/Footer.vue';

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
</style>
