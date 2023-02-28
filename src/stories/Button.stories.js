/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import Button from '../components/Button.vue';

export default {
  title: 'Button',
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button @onClick="action">${args.label}</Button>`,
  methods: { action: action('clicked') },
});

export const Search = Template.bind({});
Search.args = {
  label: 'Search',
};
