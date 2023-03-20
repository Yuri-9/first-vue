import { mount, VueWrapper } from '@vue/test-utils';
import { LazyLoadingPlugin } from '@/plugins';
import ResultSection from '@/components/ResultSection.vue';
import mockFilm from './mockFilm.json';

describe('ResultSection', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(ResultSection, {
      props: {
        films: [mockFilm, mockFilm],
      },
      global: {
        plugins: [LazyLoadingPlugin],
      },
    });
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it('renders with two Cards', () => {
    expect(wrapper.findAllComponents({ name: 'component-card' }).length).toBe(2);
  });
  it('renders No films found', async () => {
    await wrapper.setProps({ films: [] });
    expect(wrapper.findAllComponents({ name: 'component-card' }).length).toBe(0);
    expect(wrapper.find('.title').exists()).toBe(true);
    expect(wrapper.find('.cards-container').exists()).toBe(false);
  });

  it('emits onSelectFilm', () => {
    wrapper.find('[data-test="card-film"]').trigger('click');

    expect(wrapper.emitted('onSelectFilm')).toBeTruthy();
    expect(wrapper.emitted('onSelectFilm')?.length).toBe(1);
  });
});
