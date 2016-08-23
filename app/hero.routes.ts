import { RouterModule, RouterConfig } from '@angular/router';

import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';

 const HERO_APP_ROUTES_: RouterConfig = [
	{ path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroesListComponent },
    { path: 'heroes/:id', component: HeroDetailComponent }
];

export const routing = RouterModule.forRoot(HERO_APP_ROUTES_);