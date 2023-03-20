import { mount } from '@vue/test-utils';
import LocalLoader from '@/components/LocalLoader.vue';

describe('LocalLoader', () => {
  it('Should contain only span', () => {
    const wrapper = mount(LocalLoader);

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.text()).toBe('');
  });
});
