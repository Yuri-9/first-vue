import { SearchByIDs, SortByIDs } from '@/types/filters';
import { IState } from './state';

const getters = {
  selectedFilm: (state: IState) => (filmId: number) => state.films.find((film) => film.id === filmId) || null,
  searchedFilms: (state: IState) => {
    const valueLowerCase = state.searchValue.toLowerCase();

    const filteredFilms = state.films.filter((film) => {
      if (state.searchBy === SearchByIDs.TITLE) {
        return film.title.toLowerCase().includes(valueLowerCase);
      }
      if (state.searchBy === SearchByIDs.GENRE) {
        return film.genres.some((genre) => genre.toLowerCase().includes(valueLowerCase));
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
