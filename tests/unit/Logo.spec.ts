import { shallowMount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';

describe('Logo', () => {
  it('renders mount image', () => {
    const wrapper = shallowMount(Logo);
    expect(wrapper.find('image')).toBeTruthy();
  });
});
