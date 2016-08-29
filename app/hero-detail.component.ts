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
		// TODO: not nest observables, turn it into a single observable
		/*
		 * This is effing ridiculous:
		Observable.from(params)
				  .withLatestFrom(this.heroesService.getObservable(), (p:[key:string]:string, hs:Array<Hero>) => {p, h}])
				  .filter(({p:[key:string]:string, hs:Array<Hero>} , idx:number, obs:{p:[key:string]:string, hs:Array<Hero>}) => key==='id' )
				  .map( (idm:[key:string]:string) => idm['id'] ),
		*/	  
       
		/*
		 * these are extremely convoluted ways to do a heroes[parseInt(params['id'])]
		let heroes:Observable<Array<Heroes> = this.heroesService.getObservable();
		this.route.params
			.map(params => parseInt(params['id']) )
			.withLatestFrom(heroes, (number, heroes) => )
			
		let heroes:Observable<Hero> = this.heroesService.getObservable();
		this.route.params
			.map( params => parseInt(params['id']) )
			.withLatestFrom( heroes, (id:number, hero) => {id, hero} )
			.filter( (pair:{id:number, hero:Hero}, i:number, o:) => hero.id === id )
			.subscribe( (h:Hero) => this.hero = h );
		*/
		
		// okay, this is a little less convoluted, but still...
		this.route.params
			// TODO: error checking here
			.map( params => parseInt(params['id']) )
			.subscribe( (id:number) => this.heroesService.getObservable()
										.first( (h:Hero, idx:number, heroes:Observable<Hero>) => h.id === id)
										.subscribe( (h:Hero) => this.hero = h ) 
						);
		
		

        
	}
}
