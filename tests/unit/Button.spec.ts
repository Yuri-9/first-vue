import Button from '@/components/Button.vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';

describe('Button', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = shallowMount(Button, {
      slots: { default: 'Search' },
    });
  });

  it('Should be render button with slot text "Search"', () => {
    const test = wrapper.find('button').text();
    expect(test).toBe('Search');
  });
  it('should emits an event when button clicked', () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('onClick')).toBeTruthy();
    expect(wrapper.emitted('onClick')?.length).toBe(1);
  });
});
