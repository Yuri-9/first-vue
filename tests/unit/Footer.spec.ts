import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

import { LazyLoadingPlugin } from '@/plugins';

describe('Footer', () => {
  it('Should contain only image', () => {
    const wrapper = mount(Footer, {
      global: {
        plugins: [LazyLoadingPlugin],
      },
    });
    expect(wrapper.find('image')).toBeTruthy();
    expect(wrapper.text()).toBe('');
  });
});
