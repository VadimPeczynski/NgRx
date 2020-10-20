import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroEffects } from './state/hero.effects';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { heroReducer } from './state/hero.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [HeroesComponent, HeroListComponent, HeroEditComponent],
  exports: [HeroesComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([HeroEffects]),
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    StoreModule.forFeature('heroes', heroReducer),
  ],
})
export class HeroesModule {}
