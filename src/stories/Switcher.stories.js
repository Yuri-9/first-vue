/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import Switcher from '../components/Switcher.vue';

export default {
  title: 'Switcher',
};

const Template = (args) => ({
  components: { Switcher },
  setup() {
    return { args };
  },
  template: '<Switcher @onSelect="action" v-bind="args" />',
  methods: { action: action('clicked') },
});

export const SearchBy = Template.bind({});
SearchBy.args = {
  title: 'Search by',
  options: [
    {
      name: 'Title',
      id: 'title',
    },
    {
      name: 'Genre',
      id: 'genre',
    },
  ],
};

export const SortBy = Template.bind({});
SortBy.args = {
  title: 'Sort By',
  options: [
    {
      name: 'Release date',
      id: 'release_date',
    },
    {
      name: 'Rating',
      id: 'rating',
    },
  ],
};
