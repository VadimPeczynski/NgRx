import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Hero } from './hero.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError));
  }

  createHero(hero: Hero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newHero = { ...hero, id: null };
    return this.http
      .post<Hero>(this.heroesUrl, newHero, { headers })
      .pipe(
        tap((data) => console.log('createHero: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateHero(hero: Hero) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put<Hero>(url, hero, { headers })
      .pipe(
        tap(() => console.log('updateHero: ' + hero.id)),
        map(() => hero),
        catchError(this.handleError)
      );
  }

  deleteHero(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete<Hero>(url, { headers })
      .pipe(
        tap(() => console.log('deleteHero: ' + id)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
