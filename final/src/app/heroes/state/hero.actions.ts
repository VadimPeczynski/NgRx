import { createAction, props } from '@ngrx/store';
import { Hero } from '../hero.model';

export const toggleDisplayTeam = createAction('[Hero] Toggle Team Display');
export const setCurrentHero = createAction(
  '[Hero] Set Current Hero',
  props<{ hero: Hero }>()
);
export const clearCurrentHero = createAction('[Hero] Clear Current Hero');
export const initCurrentHero = createAction('[Hero] Init Current Hero');
