<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'component-app',
  components: { Header, Footer },
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
