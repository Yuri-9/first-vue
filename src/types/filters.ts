export interface IFilters<T> {
  id: T;
  name: string;
}

export type SearchByIds = 'title' | 'gender';
export type SortByIds = 'release_date' | 'rating';

// eslint-disable-next-line no-shadow
// export enum searchByIDs {
//   TITLE = 'title',
//   GENRE = 'genre',
// }

export const searchByOptions: IFilters<SearchByIds>[] = [
  {
    name: 'title',
    id: 'title',
  },
  {
    name: 'genre',
    id: 'gender',
  },
];

export const sortByOptions: IFilters<SortByIds>[] = [
  {
    name: 'Release date',
    id: 'release_date',
  },
  {
    name: 'Rating',
    id: 'rating',
  },
];
