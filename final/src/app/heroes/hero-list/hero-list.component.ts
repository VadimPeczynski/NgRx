import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getDisplayTeam } from '../state/hero.selectors';
import * as HeroActions from '../state/hero.actions';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  pageTitle = 'Heroes';

  displayTeam: boolean;

  heroes: Hero[] = [];
  constructor(private store: Store<State>, private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes: Hero[]) => (this.heroes = heroes),
    });

    this.store.select(getDisplayTeam).subscribe((displayTeam) => {
      this.displayTeam = displayTeam;
    });
  }

  checkChanged(): void {
    this.store.dispatch(HeroActions.toggleDisplayTeam());
  }

  newHero(): void {
    this.store.dispatch(HeroActions.initCurrentHero());
  }

  heroSelected(event: MatSelectionListChange): void {
    this.store.dispatch(
      HeroActions.setCurrentHero({ hero: event.option.value })
    );
  }
}
