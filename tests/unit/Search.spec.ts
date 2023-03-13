import Search from '@/components/Search.vue';
import { mount, VueWrapper } from '@vue/test-utils';

describe('Search', () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(Search, {
      data() {
        return {
          searchValue: '',
        };
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('if "searchValue" is empty button should be hidden, if "searchValue" empty, if there is a "searchValue" the button is displayed ', async () => {
    expect(wrapper.findAll('[data-test="button-search"]').length).toBe(0);
    await wrapper.setData({ searchValue: '3' });
    expect(wrapper.findAll('[data-test="button-search"]').length).toBe(1);
    await wrapper.setData({ searchValue: '' });
    expect(wrapper.findAll('[data-test="button-search"]').length).toBe(0);
  });

  it('Should be emitted "onSearch" with value', async () => {
    await wrapper.setData({ searchValue: '3' });
    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted('onSearch')).toBeTruthy();
  });

  it('if value became empty should be emitted "onSearch" with value ""', async () => {
    const input = wrapper.find('[data-test="input-search"]');
    input.setValue('100');
    await input.trigger('click');
    input.setValue('');
    await input.trigger('click');
    expect(wrapper.emitted('onSearch')).toBeTruthy();
    expect(wrapper.emitted('onSearch')?.length).toBe(1);
    expect(wrapper.emitted('onSearch')?.[0]).toEqual(['']);
  });
});
