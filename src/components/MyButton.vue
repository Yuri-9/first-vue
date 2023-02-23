<template>
  <button class="button " @click="onClick">
    <!-- @slot default inner button content -->
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'my-button',
  methods: {
    onClick() {
      this.$emit('click');
      console.log('my-button');
    },
  },
});
</script>

<style scoped>
button {
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>
