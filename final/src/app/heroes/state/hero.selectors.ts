import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroState } from './hero.state';

const getHeroFeatureState = createFeatureSelector<HeroState>('heroes');

export const getDisplayTeam = createSelector(
  getHeroFeatureState,
  (state) => state.displayTeam
);

export const getCurrentHeroId = createSelector(
  getHeroFeatureState,
  (state) => state.currentHeroId
);

export const getCurrentHero = createSelector(
  getHeroFeatureState,
  getCurrentHeroId,
  (state, id) => {
    if (id === 0) {
      return {
        id: 0,
        name: '',
        team: '',
        description: '',
        strength: 0,
      };
    } else {
      return id
        ? state.heroes.find((hero) => {
            return hero.id === id;
          })
        : null;
    }
  }
);

export const getHeroes = createSelector(
  getHeroFeatureState,
  (state) => state.heroes
);

export const getError = createSelector(
  getHeroFeatureState,
  (state) => state.error
);
