import getters from '@/store/getters';
import { IState } from '@/store/state';
import { SearchByIDs, SortByIDs } from '@/types/filters';

describe('getters', () => {
  const mockFilms = [
    {
      id: 1,
      title: 'Cat',
      genres: ['diorama, action, shooter'],
      release_date: '2001',
      vote_count: 4,
    },
    {
      id: 2,
      title: 'Dog',
      genres: ['diorama, action'],
      release_date: '1999',
      vote_count: 1,
    },
    {
      id: 3,
      title: 'Chicken',
      genres: ['detective, shooter'],
      release_date: '2003',
      vote_count: 10,
    },
    {
      id: 4,
      title: 'FoxCat',
      genres: ['diorama, action, comedy'],
      release_date: '2023',
      vote_count: 2,
    },
  ];

  const createState = (initialState: any) => {
    const state = {
      films: mockFilms,
      ...initialState,
    } as IState;
    return state;
  };

  it('selectedFilm should be return current film', () => {
    const state = createState({ selectedFilmId: mockFilms[2].id });
    expect(getters.selectedFilm(state)).toEqual(state.films[2]);
  });

  it('selectedFilm should be return null if there is no selectedFilm', () => {
    const state = createState(null);
    expect(getters.selectedFilm(state)).toBe(null);
  });

  it('totalCountFilms returns number of films', () => {
    const state = createState(null);
    expect(getters.totalCountFilms(state)).toBe(mockFilms.length);
  });

  it('searchedFilms returns films are filtered by TITLE and sorted RELEASE_DATE', () => {
    const state = createState({ searchBy: SearchByIDs.TITLE, sortBy: SortByIDs.RELEASE_DATE });

    expect(getters.searchedFilms(state)('cat').map(({ id }) => id)).toEqual([4, 1]);
  });

  it('searchedFilms returns films are filtered by GENRE and sorted RELEASE_DATE', () => {
    const state = createState({ searchBy: SearchByIDs.GENRE, sortBy: SortByIDs.RELEASE_DATE });

    expect(getters.searchedFilms(state)('act').map(({ id }) => id)).toEqual([4, 1, 2]);
  });

  it('searchedFilms returns all films because searchBy is NOT bad and sorted RELEASE_DATE', () => {
    const state = createState({ sortBy: SortByIDs.RELEASE_DATE });

    expect(getters.searchedFilms(state)('act').map(({ id }) => id)).toEqual([4, 3, 1, 2]);
  });

  it('searchedFilms returns films are filtered by TITLE and sorted RELEASE_DATE', () => {
    const state = createState({ searchBy: SearchByIDs.TITLE, sortBy: SortByIDs.RELEASE_DATE });

    expect(getters.searchedFilms(state)('').map(({ id }) => id)).toEqual([4, 3, 1, 2]);
  });

  it('searchedFilms returns films are filtered by TITLE and sorted RATING', () => {
    const state = createState({ searchBy: SearchByIDs.TITLE, sortBy: SortByIDs.RATING });

    expect(getters.searchedFilms(state)('').map(({ id }) => id)).toEqual([3, 1, 4, 2]);
  });

  it('searchedFilms returns films are filtered by TITLE and sort is bad', () => {
    const state = createState({ searchBy: SearchByIDs.TITLE });

    expect(getters.searchedFilms(state)('').map(({ id }) => id)).toEqual([1, 2, 3, 4]);
  });
});
