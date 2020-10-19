import { createAction, createReducer, on } from '@ngrx/store';

export const heroReducer = createReducer(
  { displayTeam: true },
  on(createAction('[Hero] Toggle Team Display'), (state) => {
    return {
      ...state,
      displayTeam: !state.displayTeam,
    };
  })
);
