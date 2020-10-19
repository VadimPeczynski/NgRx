import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroState } from './hero.state';

const getHeroFeatureState = createFeatureSelector<HeroState>('heroes');

export const getDisplayTeam = createSelector(
  getHeroFeatureState,
  (state) => state.displayTeam
);

export const getCurrentHero = createSelector(
  getHeroFeatureState,
  (state) => state.currentHero
);

export const getHeroes = createSelector(
  getHeroFeatureState,
  (state) => state.heroes
);
