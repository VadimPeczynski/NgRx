import { createAction, createReducer, on } from '@ngrx/store';
import { HeroState } from './hero.state';

const initialState: HeroState = {
  displayTeam: true,
  currentHero: null,
  heroes: [],
};

export const heroReducer = createReducer<HeroState>(
  initialState,
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
