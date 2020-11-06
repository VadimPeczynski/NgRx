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

export const createHero = createAction(
  '[Hero] Create Hero',
  props<{ hero: Hero }>()
);
export const createHeroSuccess = createAction(
  '[Hero] Create Hero Success',
  props<{ hero: Hero }>()
);
export const createHeroFailure = createAction(
  '[Hero] Create Hero Failure',
  props<{ error: string }>()
);

export const deleteHero = createAction(
  '[Hero] Delete Hero',
  props<{ heroId: number }>()
);
export const deleteHeroSuccess = createAction(
  '[Hero] Delete Hero Success',
  props<{ heroId: number }>()
);
export const deleteHeroFailure = createAction(
  '[Hero] Delete Hero Failure',
  props<{ error: string }>()
);
