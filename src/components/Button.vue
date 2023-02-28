<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'component-button',
  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
});
</script>

<style scoped lang="scss">
.button {
  border-radius: 8px;
  background-color: $coral;
  border-color: $coral;
  min-width: 230px;
  color: $white;
  cursor: pointer;
  font-size: 20px;
  height: 58px;
  padding: 3px 10px;
  text-transform: uppercase;
}
</style>
