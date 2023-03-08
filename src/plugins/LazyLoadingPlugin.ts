import { App } from 'vue';
import { LocalLoader } from '@/components';

export default {
  install: (app: App, options: { margin: number; visibilityThreshold: number } = { margin: 0, visibilityThreshold: 0 }) => {
    app.component('LocalLoader', LocalLoader);
    app.directive('lazyLoading', {
      beforeMount(el: HTMLImageElement) {
        el.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
      },
      created(el: HTMLImageElement, { value }) {
        const { margin, visibilityThreshold } = options;

        const parentClassName = (value?.parentClassNameToRemove || 'loading').toString();

        const getThreshold = (threshold: number): number => {
          if (threshold > 1) return 1;
          if (threshold < 0) return 0;
          return threshold;
        };

        const node = document.createElement('div');
        node.innerText = 'innerText';

        el.parentNode?.append(node);

        const loadImage = () => {
          if (el) {
            el.addEventListener('load', () => {
              (el.parentNode as HTMLElement).classList.remove(parentClassName);
            });
            el.src = el.dataset.src || el.src;
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
          const optionsObserver = {
            root: null,
            rootMargin: `${margin}px ${margin}px ${margin}px ${margin}px`,
            threshold: getThreshold(visibilityThreshold),
          };
          const observer = new IntersectionObserver(handleIntersect, optionsObserver);
          observer.observe(el);
        };
        if (window.IntersectionObserver) {
          createObserver();
        } else {
          loadImage();
        }
      },
    });
  },
};
