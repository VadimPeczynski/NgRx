import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: Hero[] = [];

  private selectedHeroSource = new BehaviorSubject<Hero>(null);
  selectedHeroChanges$ = this.selectedHeroSource.asObservable();

  constructor() {}

  newHero(): Hero {
    return {
      Id: 0,
      Name: '',
      Team: '',
      Description: '',
      Strength: 0,
    };
  }

  changeSelectedHero(selectedHero: Hero): void {
    this.selectedHeroSource.next(selectedHero);
  }

  getHeroes(): Observable<Hero[]> {
    if (this.heroes) {
      return of(this.heroes);
    }
  }
}
