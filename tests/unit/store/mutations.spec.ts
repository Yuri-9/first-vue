import mutations from '@/store/mutations';
import { IState } from '@/store/state';
import { SearchByIDs, SortByIDs } from '@/types/filters';

describe('mutations', () => {
  const state = {} as IState;
  const searchBy = SearchByIDs.TITLE;
  const sortBy = SortByIDs.RATING;

  it('SET_SEARCH_BY', () => {
    mutations.SET_SEARCH_BY(state, searchBy);
    expect(state.searchBy).toBe(searchBy);
  });

  it('SET_SORT_BY', () => {
    mutations.SET_SORT_BY(state, sortBy);
    expect(state.sortBy).toBe(sortBy);
  });
});
