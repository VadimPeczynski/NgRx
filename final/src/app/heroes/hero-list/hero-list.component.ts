import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Hero } from '../hero.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getDisplayTeam, getError, getHeroes } from '../state/hero.selectors';
import * as HeroActions from '../state/hero.actions';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit, OnDestroy {
  pageTitle = 'Heroes';

  heroes$: Observable<Hero[]>;
  displayTeam$: Observable<boolean>;
  errorSub: Subscription = new Subscription();

  constructor(private store: Store<State>, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.dispatch(HeroActions.loadHeroes());

    this.heroes$ = this.store.select(getHeroes);

    this.displayTeam$ = this.store.select(getDisplayTeam);

    this.errorSub = this.store.select(getError).subscribe((error) => {
      if (error) {
        this._snackBar.open(error, 'Close');
      }
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  checkChanged(): void {
    this.store.dispatch(HeroActions.toggleDisplayTeam());
  }

  newHero(): void {
    this.store.dispatch(HeroActions.initCurrentHero());
  }

  heroSelected(event: MatSelectionListChange): void {
    this.store.dispatch(
      HeroActions.setCurrentHero({ currentHeroId: event.option.value.id })
    );
  }
}
