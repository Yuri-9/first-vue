import { App } from 'vue';

export default {
  install: (app: App) => {
    app.directive('scrollIntoView', {
      updated: (el: HTMLElement, { value }) => {
        const yOffset = value || 0;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      },
      mounted: (el: HTMLElement, { value }) => {
        const yOffset = value || 0;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      },
    });
  },
};
