/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import Card from '@/components/Card.vue';

export default {
  title: 'Card',
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card @onClick="action" v-bind="args" />',
  methods: { action: action('clicked') },
});

export const CardFilm = Template.bind({});
CardFilm.args = {
  film: {
    id: '1',
    title: 'Pulp Fiction',
    url: 'pulp_fiction.png',
    director: 'Quentin Tarantino',
    year: 1994,
    genre: ['Action', 'Adventure'],
  },
};
