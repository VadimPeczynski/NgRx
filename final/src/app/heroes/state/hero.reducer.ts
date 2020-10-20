import { createReducer, on } from '@ngrx/store';
import { HeroState } from './hero.state';
import * as HeroActions from './hero.actions';

const initialState: HeroState = {
  displayTeam: true,
  currentHero: null,
  heroes: [],
};

export const heroReducer = createReducer<HeroState>(
  initialState,
  on(
    HeroActions.toggleDisplayTeam,
    (state): HeroState => {
      return {
        ...state,
        displayTeam: !state.displayTeam,
      };
    }
  ),
  on(
    HeroActions.setCurrentHero,
    (state, action): HeroState => {
      return {
        ...state,
        currentHero: action.hero,
      };
    }
  ),
  on(
    HeroActions.clearCurrentHero,
    (state): HeroState => {
      return {
        ...state,
        currentHero: null,
      };
    }
  ),
  on(
    HeroActions.initCurrentHero,
    (state): HeroState => {
      return {
        ...state,
        currentHero: {
          id: 0,
          name: '',
          team: '',
          description: '',
          strength: 0,
        },
      };
    }
  )
);
