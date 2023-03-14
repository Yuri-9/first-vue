import { createStore } from 'vuex';
import { mount } from '@vue/test-utils';
import TotalSection from '@/components/TotalSection.vue';
import { IState, state } from '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

describe('TotalSection', () => {
  const mockActions = {
    setSortBy: jest.fn(),
  };

  const createVuexStore = (initialState = {}, withMockActions = false) =>
    createStore({
      state: { ...state, ...initialState } as IState,
      mutations,
      actions: withMockActions ? mockActions : actions,
    });

  function factory(store: any) {
    return mount(TotalSection, {
      global: {
        plugins: [store],
      },
      props: {
        total: 6,
      },
    });
  }

  test('should be render with correct title', async () => {
    const store = createVuexStore();
    const wrapper = factory(store);
    await wrapper.findAll('button')[1].trigger('click');
    expect(wrapper.find('[data-test="total-count"]').text()).toBe('6 movies found');
  });
  test('title is hidden if there are no films', async () => {
    const store = createVuexStore();
    const wrapper = factory(store);

    await wrapper.setProps({ total: 0 });

    expect(wrapper.find('[data-test="total-count"]').text()).toBe('');
  });

  test('should be render selected current switcher', async () => {
    const store = createVuexStore({ sortBy: 'rating' });
    const wrapper = factory(store);

    expect(wrapper.findAll('button')[1].classes()).toContain('active');
    expect(wrapper.findAll('button')[0].classes()).not.toContain('active');

    await wrapper.findAll('button')[0].trigger('click');
    expect(wrapper.findAll('button')[0].classes()).toContain('active');
  });
  test('dispatches "setSortBy" if trigger switcher', async () => {
    const store = createVuexStore({ sortBy: 'rating' }, true);
    const wrapper = factory(store);

    await wrapper.findAll('button')[1].trigger('click');
    expect(mockActions.setSortBy).toHaveBeenCalled();
  });
});
