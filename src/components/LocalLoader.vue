<template>
  <span class="loader" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LocalLoader',
});
</script>

<style scoped lang="scss">
.loading > .loader {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 25px);
  border-top: 4px solid $blue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
