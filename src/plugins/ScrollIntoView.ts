import { App } from 'vue';

export default {
  install: (app: App) => {
    const scrollOptions = { behavior: 'smooth', block: 'start', inline: 'nearest' } as ScrollIntoViewOptions;

    app.directive('scrollIntoView', {
      updated: (el: HTMLElement) => {
        el.scrollIntoView(scrollOptions);
      },
      mounted: (el: HTMLElement) => {
        el.scrollIntoView(scrollOptions);
      },
    });
  },
};
