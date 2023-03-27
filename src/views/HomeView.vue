<template>
  <router-view></router-view>
  <TotalSection />
  <Suspense>
    <template #default>
      <ResultSection />
    </template>
    <template #fallback>
      <p class="loading">Loading...</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TotalSection from '@/components/TotalSection.vue';
import ResultSection from '@/components/ResultSection.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TotalSection,
    ResultSection,
  },
});
</script>
<style lang="scss" scoped>
.loading {
  flex: 1;
  padding-top: 50px;
  font-size: 20px;
  background-color: $gray-800;
}
</style>
