import { shallowMount, VueWrapper } from '@vue/test-utils';
import { LazyLoadingPlugin } from '@/plugins';
import ImageWithLoader from '@/components/ImageWithLoader.vue';

describe('ImageWithLoader', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(ImageWithLoader, {
      props: {
        src: 'image.png',
        alt: 'Forrest',
      },
      global: {
        plugins: [LazyLoadingPlugin],
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('render image this current attributes', async () => {
    const image = wrapper.find('img');

    expect(image.attributes().alt).toBe('Forrest');
    expect(image.element.dataset.src).toBe('image.png');
  });
});
