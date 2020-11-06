import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

export class HeroData implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'Iron Man',
        team: 'Avengers',
        description: 'Man with iron suit',
        strength: 4.2,
      },
      {
        id: 2,
        name: 'Thor',
        team: 'Avengers',
        description: 'Norse god of thunder',
        strength: 4.5,
      },
      {
        id: 3,
        name: 'Superman',
        team: 'Justice League',
        description: 'Man of steel',
        strength: 5.0,
      },
      {
        id: 4,
        name: 'John Constantine',
        team: 'Justice League Dark',
        description: 'Fights to keep balance between demons and angels',
        strength: 3.2,
      },
      {
        id: 5,
        name: 'Wonder Woman',
        team: 'Justice League',
        description: 'Amazon warrior',
        strength: 4.4,
      },
    ];
    return { heroes };
  }
}
