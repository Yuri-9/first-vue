export interface IFilters<T> {
  id: T;
  name: string;
}

// export type SearchByIds = 'title' | 'genre';
// export type SortByIds = 'release_date' | 'rating';

// eslint-disable-next-line no-shadow
export enum SearchByIDs {
  TITLE = 'title',
  GENRE = 'genre',
}

export const searchByOptions: IFilters<SearchByIDs>[] = [
  {
    id: SearchByIDs.TITLE,
    name: 'title',
  },
  {
    id: SearchByIDs.GENRE,
    name: 'genre',
  },
];

// eslint-disable-next-line no-shadow
export enum SortByIDs {
  RELEASE_DATE = 'release_date',
  RATING = 'rating',
}

export const sortByOptions: IFilters<SortByIDs>[] = [
  {
    id: SortByIDs.RELEASE_DATE,
    name: 'Release date',
  },
  {
    id: SortByIDs.RATING,
    name: 'Rating',
  },
];
