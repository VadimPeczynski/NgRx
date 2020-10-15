import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  private heroes: Hero[];

  private selectedHeroSource = new BehaviorSubject<Hero>(null);
  selectedHeroChanges$ = this.selectedHeroSource.asObservable();

  constructor(private http: HttpClient) {}

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
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((data) => (this.heroes = data)));
  }
}
