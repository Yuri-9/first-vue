import { mount } from '@vue/test-utils';
import FilmDescription from '@/components/FilmDescription.vue';
import mockFilm from './mockFilm.json';

describe('FilmDescription', () => {
  it('should be render correctly', () => {
    const wrapper = mount(FilmDescription, {
      props: {
        film: mockFilm,
      },
      global: {
        directives: {
          scrollIntoView() {
            //
          },
        },
      },
    });

    const image = wrapper.find('img');
    expect(image.attributes().alt).toBe(mockFilm.title);
    expect(image.attributes().src).toBe(mockFilm.poster_path);

    expect(wrapper.find('.summary-header_title').text()).toBe(mockFilm.title);
    expect(wrapper.find('.range').text()).toBe('Action & Adventure & Science Fiction');
    expect(wrapper.find('.duration').text()).toBe('154 min');
  });
});
