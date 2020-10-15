import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HeroesComponent, HeroListComponent, HeroEditComponent],
  exports: [HeroesComponent],
  imports: [CommonModule, FlexLayoutModule],
})
export class HeroesModule {}
