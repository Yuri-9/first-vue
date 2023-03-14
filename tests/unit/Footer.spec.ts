import { mount } from '@vue/test-utils';
import { LazyLoadingPlugin } from '@/plugins';
import Footer from '@/components/Footer.vue';

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
