import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { map, tap } from 'rxjs/operators';

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
      id: 0,
      name: '',
      team: '',
      description: '',
      strength: 0,
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

  createHero(hero: Hero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newHero = { ...hero, id: null };
    return this.http
      .post<Hero>(this.heroesUrl, newHero, { headers })
      .pipe(
        tap((data) => console.log('createHero: ' + JSON.stringify(data))),
        tap((data) => {
          this.heroes.push(data);
        })
      );
  }

  updateHero(hero: Hero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put<Hero>(url, hero, { headers })
      .pipe(
        tap(() => console.log('updateHero: ' + hero.id)),
        tap(() => {
          const foundIndex = this.heroes.findIndex(
            (item) => item.id === hero.id
          );
          if (foundIndex > -1) {
            this.heroes[foundIndex] = hero;
          }
        }),
        map(() => hero)
      );
  }

  deleteHero(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete<Hero>(url, { headers })
      .pipe(
        tap(() => console.log('deleteHero: ' + id)),
        tap(() => {
          const foundIndex = this.heroes.findIndex((item) => item.id === id);
          if (foundIndex > -1) {
            this.heroes.splice(foundIndex, 1);
          }
        })
      );
  }
}
