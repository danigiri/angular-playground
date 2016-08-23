import { Routes, RouterModule } from '@angular/router';

import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';

export const HeroAppRoutes = [
  { path: '', component: HeroesListComponent },
  { path: 'heroes/:id', component: HeroDetailComponent }
];

export const routing = RouterModule.forRoot(HeroAppRoutes)