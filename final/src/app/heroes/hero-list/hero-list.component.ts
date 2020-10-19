import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getDisplayTeam } from '../state/hero.selectors';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  pageTitle = 'Heroes';

  displayTeam: boolean;

  heroes: Hero[] = [];
  sub = new Subscription();
  constructor(private store: Store<State>, private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes: Hero[]) => (this.heroes = heroes),
    });

    this.store.select(getDisplayTeam).subscribe((displayTeam) => {
      this.displayTeam = displayTeam;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(): void {
    this.store.dispatch({ type: '[Hero] Toggle Team Display' });
  }

  newHero(): void {
    this.heroService.changeSelectedHero(this.heroService.newHero());
  }

  heroSelected(event: MatSelectionListChange): void {
    this.heroService.changeSelectedHero(event.option.value);
  }
}
