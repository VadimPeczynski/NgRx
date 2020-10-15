import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
