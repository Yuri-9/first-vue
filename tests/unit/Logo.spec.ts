import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';
import { LazyLoadingPlugin } from '@/plugins';

describe('Logo', () => {
  it('renders mount image', () => {
    const wrapper = shallowMount(Logo, {
      global: {
        plugins: [LazyLoadingPlugin],
      },
    });

    const image = wrapper.find('img');

    expect(image.exists()).toBeTruthy();
  });
});
