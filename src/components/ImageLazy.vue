<template>
  <div class="image-wrapper loading">
    <img v-lazy-loading class="image" :data-src="src" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" :alt="alt" />
    <span class="loader" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageLazy',
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
  directives: {
    lazyLoading: {
      created: (el: HTMLImageElement) => {
        const loadImage = () => {
          const imageNode = el;

          if (imageNode) {
            imageNode.addEventListener('load', () => {
              (el.parentNode as HTMLElement).classList.remove('loading');
            });
            imageNode.src = imageNode.dataset.src || '';
          }
        };

        const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(el);
            }
          });
        };

        const createObserver = () => {
          const options = {
            root: null,
            threshold: 0,
          };
          const observer = new IntersectionObserver(handleIntersect, options);
          observer.observe(el);
        };
        if (window.IntersectionObserver) {
          createObserver();
        } else {
          loadImage();
        }
      },
    },
  },
});
</script>

<style scoped lang="scss">
.image-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  &.loading > .loader {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 25px);
    border-top: 4px solid $blue;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
}

.image {
  object-fit: contain;
  width: 100%;
  height: 100%;
  min-height: 400px;
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
