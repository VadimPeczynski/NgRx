import { createAction, props } from '@ngrx/store';
import { Hero } from '../hero.model';

export const toggleDisplayTeam = createAction('[Hero] Toggle Team Display');
export const setCurrentHero = createAction(
  '[Hero] Set Current Hero',
  props<{ currentHeroId: number }>()
);
export const clearCurrentHero = createAction('[Hero] Clear Current Hero');
export const initCurrentHero = createAction('[Hero] Init Current Hero');
export const loadHeroes = createAction('[Hero] Load');
export const loadHeroesSuccess = createAction(
  '[Hero] Load Success',
  props<{ heroes: Hero[] }>()
);
export const loadHeroesFailure = createAction(
  '[Hero] Load Failure',
  props<{ error: string }>()
);

export const updateHero = createAction(
  '[Hero] Update Hero',
  props<{ hero: Hero }>()
);
export const updateHeroSuccess = createAction(
  '[Hero] Update Hero Success',
  props<{ hero: Hero }>()
);
export const updateHeroFailure = createAction(
  '[Hero] Update Hero Failure',
  props<{ error: string }>()
);
