import { createAction, createReducer, on } from '@ngrx/store';
import { HeroState } from './hero.state';

export const heroReducer = createReducer<HeroState>(
  { displayTeam: true } as HeroState,
  on(
    createAction('[Hero] Toggle Team Display'),
    (state): HeroState => {
      return {
        ...state,
        displayTeam: !state.displayTeam,
      };
    }
  )
);
