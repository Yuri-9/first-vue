import { mount } from '@vue/test-utils';
import { LazyLoadingPlugin } from '@/plugins';
import { searchByOptions, SearchByIDs } from '@/types/filters';
import SearchSection from '@/components/SearchSection.vue';
import { createStore } from 'vuex';
import { IState, state } from '@/store/state';
import mutations from '@/store/mutations';

describe('SearchSection', () => {
  const mockActions = {
    setSearchBy: jest.fn(),
  };

  const createVuexStore = (initialState = {}) =>
    createStore({
      state: { ...state, ...initialState } as IState,
      mutations,
      actions: mockActions,
    });

  function factory(store: any) {
    return mount(SearchSection, {
      global: {
        plugins: [store, LazyLoadingPlugin],
      },
      props: {
        total: 6,
      },
      data() {
        return {
          filters: searchByOptions,
        };
      },
    });
  }

  it('renders with components', () => {
    const store = createVuexStore();
    const wrapper = factory(store);

    expect(wrapper.findComponent({ name: 'component-search' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'component-switcher' }).exists()).toBe(true);
  });

  it('emits onSelectFilm', () => {
    const store = createVuexStore();
    const wrapper = factory(store);

    wrapper.find('[data-test="search-form"]').trigger('submit');

    expect(wrapper.emitted('onSearch')).toBeTruthy();
    expect(wrapper.emitted('onSearch')?.length).toBe(1);
  });

  test('dispatches "setSearchBy" if trigger switcher', async () => {
    const store = createVuexStore({ searchBy: SearchByIDs.GENRE });
    const wrapper = factory(store);

    await wrapper.findAll('button')[1].trigger('click');
    expect(mockActions.setSearchBy).toHaveBeenCalled();
  });
});
