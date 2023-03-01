<template>
  <footer class="footer">
    <Logo />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  name: 'component-footer',
  components: { Logo },
});
</script>

<style scoped lang="scss">
.footer {
  height: 75px;
  display: flex;
  align-items: center;
  background-color: $gray-600;
  justify-content: center;
}
</style>
