/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';

import FilmDescription from '@/components/FilmDescription.vue';

export default {
  title: 'FilmDescription',
};

const Template = (args) => ({
  components: { FilmDescription },
  setup() {
    return { args };
  },
  template: '<FilmDescription @onClick="action" v-bind="args" />',
  methods: { action: action('clicked') },
});

export const FilmDescriptionCard = Template.bind({});
FilmDescriptionCard.args = {
  film: {
    id: '1',
    title: 'Pulp Fiction',
    url: 'pulp_fiction.png',
    director: 'Quentin Tarantino',
    year: 1994,
    duration: 154,
    rating: 4.3,
    description:
      "Hitmen Jules Winnfield and Vincent Vega arrive at an apartment to retrieve a briefcase for their boss, gangster Marsellus Wallace, from a business partner, Brett. After Vincent checks the contents of the briefcase, Jules shoots one of Brett's associates. He declaims a passage from the Bible, and he and Vincent kill Brett for trying to double-cross Marsellus. They take the briefcase to Marsellus and wait while he bribes boxer Butch Coolidge to take a dive in his upcoming match",
    genre: ['Action', 'Adventure'],
  },
};
