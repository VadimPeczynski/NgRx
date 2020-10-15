import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Subscription } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero.model';

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
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (heroes: Hero[]) => (this.heroes = heroes),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(): void {
    this.displayTeam = !this.displayTeam;
  }

  newHero(): void {
    this.heroService.changeSelectedHero(this.heroService.newHero());
  }

  heroSelected(event: MatSelectionListChange): void {
    this.heroService.changeSelectedHero(event.option.value);
  }
}
