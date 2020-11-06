import { createReducer, on } from '@ngrx/store';
import { HeroState } from './hero.state';
import * as HeroActions from './hero.actions';

const initialState: HeroState = {
  displayTeam: true,
  currentHeroId: null,
  heroes: [],
  error: '',
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
        currentHeroId: action.currentHeroId,
      };
    }
  ),
  on(
    HeroActions.clearCurrentHero,
    (state): HeroState => {
      return {
        ...state,
        currentHeroId: null,
      };
    }
  ),
  on(
    HeroActions.initCurrentHero,
    (state): HeroState => {
      return {
        ...state,
        currentHeroId: 0,
      };
    }
  ),
  on(
    HeroActions.loadHeroesSuccess,
    (state, action): HeroState => {
      return {
        ...state,
        heroes: action.heroes,
        error: '',
      };
    }
  ),
  on(
    HeroActions.loadHeroesFailure,
    (state, action): HeroState => {
      return {
        ...state,
        heroes: [],
        error: action.error,
      };
    }
  ),
  on(
    HeroActions.updateHeroSuccess,
    (state, action): HeroState => {
      const updatedHeroes = state.heroes.map((item) =>
        action.hero.id === item.id ? action.hero : item
      );
      return {
        ...state,
        heroes: updatedHeroes,
        currentHeroId: action.hero.id,
        error: '',
      };
    }
  ),
  on(
    HeroActions.updateHeroFailure,
    (state, action): HeroState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(
    HeroActions.createHeroSuccess,
    (state, action): HeroState => {
      return {
        ...state,
        heroes: [...state.heroes, action.hero],
        currentHeroId: action.hero.id,
        error: '',
      };
    }
  ),
  on(
    HeroActions.createHeroFailure,
    (state, action): HeroState => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(
    HeroActions.deleteHeroSuccess,
    (state, action): HeroState => {
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.heroId),
        currentHeroId: null,
        error: '',
      };
    }
  ),
  on(
    HeroActions.deleteHeroFailure,
    (state, action): HeroState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);
