import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/first';

import { Hero } from './hero';
import { HeroesService } from './heroes-service';

@Component({
	selector: 'my-hero-detail',
	providers:	[
					HeroesService
				],
	template: `
			  <div *ngIf="hero">
			    <h2>{{hero.name}} details!</h2>
			    <div><label>id: </label>{{hero.id}}</div>
			    <div>
			      <label>name: </label>
			      <input [(ngModel)]="hero.name" placeholder="name"/>
			    </div>
			  </div>
			  `
})

export class HeroDetailComponent {
	@Input()
	public hero: Hero;

	constructor(private route: ActivatedRoute, private heroesService: HeroesService) {}

	ngOnInit() {
		// Option number 3, we can actually omit the parameters in first, this is a bit more compact
		this.route.params
			.map( params => parseInt(params['id']) )
			.subscribe( (id:number) => this.heroesService.getObservable()
										.first( (h:Hero) => h.id === id)
										.subscribe( (h:Hero) => this.hero = h ));
	}
	
	ngOnInit2() {
		// option that is less 'reactive' but somehow feels a bit more normal
		let id:number;
		this.route.params
			.subscribe( params => id = parseInt(params['id']) );
		this.heroesService.getObservable()
			.first( (h:Hero, idx:number) => h.id === id)
			.subscribe( (h:Hero) => this.hero = h );
	}

	
}
