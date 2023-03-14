import { shallowMount, VueWrapper } from '@vue/test-utils';
import { LazyLoadingPlugin } from '@/plugins';
import Card from '@/components/Card.vue';
import mockFilm from './mockFilm.json';

describe('Card', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      props: {
        film: mockFilm,
      },
      global: {
        plugins: [LazyLoadingPlugin],
      },
    });
  });

  afterEach(() => {
    wrapper?.unmount();
  });

  it('should be render correctly with props', async () => {
    expect(wrapper.find('[data-test="card-title"]').text()).toBe(mockFilm.title);
    expect(wrapper.find('[data-test="card-year"]').text()).toBe('2020');
    expect(wrapper.find('[data-test="card-genre"]').text()).toBe('Action & Adventure & Science Fiction');
  });

  it('receives current props to ImageWithLoader', () => {
    const ImageWithLoader = wrapper.findComponent({ name: 'ImageWithLoader' });
    expect(ImageWithLoader.exists()).toBe(true);
    expect(ImageWithLoader.attributes().src).toBe(mockFilm.poster_path);
    expect(ImageWithLoader.attributes().alt).toBe(mockFilm.title);
  });

  it('emits onClick', () => {
    wrapper.find('[data-test="card-film"]').trigger('click');
    wrapper.find('[data-test="card-film"]').trigger('keydown.enter');

    expect(wrapper.emitted('onClick')).toBeTruthy();
    expect(wrapper.emitted('onClick')?.length).toBe(2);
  });
});
