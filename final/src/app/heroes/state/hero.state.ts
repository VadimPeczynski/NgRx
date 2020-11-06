import { Hero } from '../hero.model';

// Module Lazy loaded
// import * as AppState from 'src/app/state/app.state';
// export interface State extends AppState.State {
//   heroes: HeroState;
// }

export interface HeroState {
  displayTeam: boolean;
  currentHeroId: number;
  heroes: Hero[];
  error: string;
}
