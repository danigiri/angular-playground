import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent }  from './app.component';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { routing } from './hero.routes';

// TODO: get rid of directives as of RC5
@NgModule({
  	imports:      [ BrowserModule,
   					FormsModule,
   					routing
   				  ],
  	declarations: [
	  				AppComponent,
	  				HeroesListComponent,
   					HeroDetailComponent
   				  ],
   	providers: [{
   				    provide: APP_BASE_HREF,
   				    useValue: '/'
   			   	}],
  	bootstrap:    [ AppComponent ]
})

export class AppModule { }
