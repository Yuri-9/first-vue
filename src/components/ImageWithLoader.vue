<template>
  <div class="image-wrapper loading">
    <img v-lazyLoading="{ parentClassNameToRemove: 'loading' }" class="image" :data-src="src" :alt="alt" v-bind="$attrs" />
    <LocalLoader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  inheritAttrs: false,
  name: 'ImageWithLoader',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  &.error::after {
  content: 'Image not available';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
}

.image {
  object-fit: contain;
  width: 100%;
  min-height: 400px;
}
</style>
