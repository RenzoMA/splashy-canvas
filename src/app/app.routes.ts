import { Routes } from '@angular/router';
import { LandingHomeComponent } from './home/landing-home/landing-home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingHomeComponent,
  },
  {
    path: 'play',
    loadComponent: () =>
      import('./game/components/landing-game/landing-game.component').then(
        (mod) => mod.LandingGameComponent
      ),
  },
  {
    path: 'instructions',
    loadComponent: () =>
      import(
        './instructions/components/landing-instructions/landing-instructions.component'
      ).then((mod) => mod.LandingInstructionsComponent),
  },
];
