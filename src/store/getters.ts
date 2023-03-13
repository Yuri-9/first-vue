import { SearchByIDs, SortByIDs } from '@/types/filters';
import { IState } from './state';

const getters = {
  selectedFilm: (state: IState) => state.films.find((film) => film.id === state.selectedFilmId),
  totalCountFilms: (state: IState) => state.films.length,
  searchedFilms: (state: IState) => (searchValue: string) => {
    const valueLoverCase = searchValue.toLowerCase();

    const filteredFilms = state.films.filter((film) => {
      if (state.searchBy === SearchByIDs.TITLE) {
        return film.title.toLowerCase().includes(valueLoverCase);
      }
      if (state.searchBy === SearchByIDs.GENRE) {
        return film.genres.some((genre) => genre.toLowerCase().includes(valueLoverCase));
      }
      return true;
    });

    const sortedFilms = filteredFilms.sort((filmA, filmB) => {
      if (state.sortBy === SortByIDs.RELEASE_DATE) {
        return filmA.release_date < filmB.release_date ? 1 : -1;
      }
      if (state.sortBy === SortByIDs.RATING) {
        return filmA.vote_count < filmB.vote_count ? 1 : -1;
      }
      return 0;
    });
    return sortedFilms;
  },
};

export default getters;
