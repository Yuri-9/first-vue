import { mount } from '@vue/test-utils';
import FilmDescription from '@/components/FilmDescription.vue';

const mockFilm = {
  id: 447365,
  title: 'Guardians of the Galaxy Vol. 3',
  tagline: '',
  vote_average: 0,
  vote_count: 5,
  director: 'Allison Anders',
  release_date: '2020-05-01',
  poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
  overview: "The third film based on Marvel's Guardians of the Galaxy.",
  budget: 0,
  revenue: 0,
  genres: ['Action', 'Adventure', 'Science Fiction'],
  runtime: 154,
};

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
