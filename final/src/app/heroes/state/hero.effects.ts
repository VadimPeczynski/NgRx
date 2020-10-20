import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import * as HeroActions from '../state/hero.actions';

@Injectable()
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  loadHeroes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HeroActions.loadHeroes),
      mergeMap(() =>
        this.heroService.getHeroes().pipe(
          map((heroes) => HeroActions.loadHeroesSuccess({ heroes })),
          catchError((error) => of(HeroActions.loadHeroesFailure({ error })))
        )
      )
    );
  });
}
