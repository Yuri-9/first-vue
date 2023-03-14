import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { key } from '@/store';
import HeaderComponent from '@/components/HeaderComponent.vue';

describe('HeaderComponent', () => {
  const createVuexStore = (selectedFilm: string | null) =>
    createStore({
      getters: {
        selectedFilm: () => selectedFilm,
      },
    });

  function factory(selectedFilm: string | null) {
    const store = createVuexStore(selectedFilm);
    return shallowMount(HeaderComponent, {
      global: {
        provide: {
          [key as symbol]: store,
        },
      },
      props: {
        total: 6,
      },
    });
  }

  it('search svg should be hidden', async () => {
    const selectedFilm = null;
    const wrapper = factory(selectedFilm);

    expect(wrapper.find('[data-test="header-search-svg"]').exists()).toBe(false);
  });

  it('search svg should be show', async () => {
    const selectedFilm = 'film';
    const wrapper = factory(selectedFilm);

    expect(wrapper.find('[data-test="header-search-svg"]').exists()).toBe(true);
  });
});
