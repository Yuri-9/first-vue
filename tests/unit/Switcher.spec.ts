import { mount, VueWrapper } from '@vue/test-utils';
import Switcher from '@/components/Switcher.vue';

const mockOptions = [
  {
    id: 'title',
    name: 'Title',
  },
  {
    id: 'genre',
    name: 'Genre',
  },
  {
    id: 'range',
    name: 'Range',
  },
];

describe('Switcher', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(Switcher, {
      props: {
        title: 'Search',
        selectedOption: mockOptions[1].id,
        options: mockOptions,
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should be render with with empty props', async () => {
    const emptyProps = { title: '', selectedOption: '', options: [] };
    await wrapper.setProps(emptyProps);

    expect(wrapper.find('[data-test="switcher-title"]').text()).toBe('');
    expect(wrapper.findAll('button').length).toBe(0);
  });
  it('should be render with correct title, correct number buttons and correct selected button', () => {
    expect(wrapper.find('[data-test="switcher-title"]').text()).toBe('Search');
    expect(wrapper.findAll('button').length).toBe(3);
    expect(wrapper.findAll('button')?.[0].classes()).not.toContain('active');
    expect(wrapper.findAll('button')?.[1].classes()).toContain('active');
  });

  it('Should emits an event when toggle switcher', async () => {
    const button = wrapper.findAll('button')[0];
    await button.trigger('click');

    expect(wrapper.emitted('onSelect')?.length).toBe(1);
    expect(wrapper.emitted('onSelect')?.[0]).toEqual(['title']);

    await wrapper.setProps({ selectedOption: 'title' });

    expect(wrapper.vm.activeId).toMatch('title');
  });

  it('if selectedOption === "" then activeId will be options[0].id', async () => {
    await wrapper.setProps({ selectedOption: '' });

    expect(wrapper.vm.activeId).toBe(mockOptions[0].id);
  });
});
