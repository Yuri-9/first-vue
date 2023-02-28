/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import Search from '../components/Search.vue';

export default {
  title: 'Search',
};

export const SearchFilm = () => ({
  components: { Search },
  template: '<Search @onSearch="action" />',
  methods: { action: action('clicked') },
});
