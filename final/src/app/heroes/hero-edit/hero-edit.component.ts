import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Hero } from '../hero.model';
import { GenericValidator } from './validators/generic.validator';
import { NumberValidators } from './validators/number.validator';
import * as HeroActions from '../state/hero.actions';
import { getCurrentHero } from '../state/hero.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.scss'],
})
export class HeroEditComponent implements OnInit {
  pageTitle = 'Hero Edit';
  hero: Hero;
  heroForm: FormGroup;

  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  sub: Subscription = new Subscription();
  hero$: Observable<Hero>;

  constructor(
    private store: Store<State>,
    private fb: FormBuilder
  ) {
    const validationMessages = {
      name: {
        required: 'Hero name is required.',
        minlength: 'Hero name must be at least three characters.',
        maxlength: 'Hero name cannot exceed 50 characters.',
      },
      team: {
        required: 'Hero code is required.',
      },
      strength: {
        range: 'Rate the hero between 1 (lowest) and 5 (highest).',
      },
    };

    this.genericValidator = new GenericValidator(validationMessages);
  }

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      team: ['', Validators.required],
      strength: ['', NumberValidators.range(1, 5)],
      description: '',
    });

    this.hero$ = this.store
      .select(getCurrentHero)
      .pipe(tap((currentHero) => this.displayHero(currentHero)));

    this.heroForm.valueChanges.subscribe(
      () =>
        (this.displayMessage = this.genericValidator.processMessages(
          this.heroForm
        ))
    );
  }

  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.heroForm);
  }

  displayHero(hero: Hero): void {
    if (hero) {
      this.heroForm.reset();

      if (hero.id === 0) {
        this.pageTitle = 'Add Hero';
      } else {
        this.pageTitle = `Edit Hero: ${hero.name}`;
      }

      this.heroForm.patchValue({
        name: hero.name,
        team: hero.team,
        strength: hero.strength,
        description: hero.description,
      });
    }
  }

  cancelEdit(hero: Hero): void {
    this.displayHero(hero);
  }

  deleteHero(hero: Hero): void {
    if (hero && hero.id) {
      if (confirm(`Do you really want to delete the hero: ${hero.name}?`)) {
        this.store.dispatch(HeroActions.deleteHero({ heroId: hero.id }));
      }
    } else {
      this.store.dispatch(HeroActions.clearCurrentHero());
    }
  }

  saveHero(originalHero: Hero): void {
    if (this.heroForm.valid) {
      if (this.heroForm.dirty) {
        const hero = { ...originalHero, ...this.heroForm.value };

        if (hero.id === 0) {
          this.store.dispatch(HeroActions.createHero({ hero }));
        } else {
          this.store.dispatch(HeroActions.updateHero({ hero }));
        }
      }
    }
  }
}
