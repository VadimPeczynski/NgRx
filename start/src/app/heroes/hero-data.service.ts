import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero.model';

export class HeroData implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        Id: 1,
        Name: 'Iron Man',
        Team: 'Avengers',
        Description: 'Man with iron suit',
        Strength: 4.2,
      },
      {
        Id: 2,
        Name: 'Thor',
        Team: 'Avengers',
        Description: 'Norse god of thunder',
        Strength: 4.5,
      },
      {
        Id: 3,
        Name: 'Superman',
        Team: 'Justice League',
        Description: 'Man of steel',
        Strength: 5.0,
      },
      {
        Id: 4,
        Name: 'John Constantine',
        Team: 'Justice League Dark',
        Description: 'Fights to keep balance between demons and angels',
        Strength: 3.2,
      },
      {
        Id: 5,
        Name: 'Wonder Woman',
        Team: 'Justice League',
        Description: 'Amazon warrior',
        Strength: 4.4,
      },
    ];
    return { heroes: heroes };
  }
}
