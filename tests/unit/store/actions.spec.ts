// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import actions from '@/store/actions';

describe('actions', () => {
  it('setSelectedFilmId', () => {
    const context = { commit: jest.fn() };
    const filmId = 2;
    const searchBy = 'title';
    const sortBy = 'range';

    actions?.setSelectedFilmId(context, filmId);
    expect(context.commit).toHaveBeenCalledWith('SET_SELECTED_FILM_ID', filmId);

    actions?.setSearchBy(context, searchBy);
    expect(context.commit).toHaveBeenCalledWith('SET_SEARCH_BY', searchBy);

    actions?.setSortBy(context, sortBy);
    expect(context.commit).toHaveBeenCalledWith('SET_SORT_BY', sortBy);
  });
});
