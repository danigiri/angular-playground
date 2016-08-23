import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Hero } from './hero';
import { HeroesService } from './heroes-service';


@Component({
	selector: 'heroes-list',
	template: `
				<ul class="heroes">
					<li *ngFor="let hero of heroes"
						[class.selected]="hero === selectedHero"
						>
					  <span class="badge">{{hero.id}}</span> {{hero.name}} 
					  <a [routerLink]="['/heroes',hero.id]"><small>[Edit]</small></a>
					</li>
				</ul>
				<!--my-hero-detail [hero]="selectedHero"  ></my-hero-detail-->
				`,
	providers:	[
					HeroesService
				],
	directives: [ROUTER_DIRECTIVES],
	styles: [`
			  .selected {
			    background-color: #CFD8DC !important;
			    color: white;
			  }
			  .heroes {
			    margin: 0 0 2em 0;
			    list-style-type: none;
			    padding: 0;
			    width: 15em;
			  }
			  .heroes li {
			    cursor: pointer;
			    position: relative;
			    left: 0;
			    background-color: #EEE;
			    margin: .5em;
			    padding: .3em 0;
			    height: 1.6em;
			    border-radius: 4px;
			  }
			  .heroes li.selected:hover {
			    background-color: #BBD8DC !important;
			    color: red;
			  }
			  .heroes li:hover {
			    color: #607D8B;
			    background-color: #DDD;
			    left: .1em;
			  }
			  .heroes .text {
			    position: relative;
			    top: -3px;
			  }
			  .heroes .badge {
			    display: inline-block;
			    font-size: small;
			    color: white;
			    padding: 0.8em 0.7em 0 0.7em;
			    background-color: #607D8B;
			    line-height: 1em;
			    position: relative;
			    left: -1px;
			    top: -4px;
			    height: 1.8em;
			    margin-right: .8em;
			    border-radius: 4px 0 0 4px;
			  }
			`]
})


export class HeroesListComponent {
	
	heroes: Array<Hero>;
	selectedHero: Hero;

	constructor(private heroesService: HeroesService) {}

	ngOnInit() {
	  this.heroesService.getObservable().subscribe(
			  (h:Array<Hero>) => this.heroes = h
			  );
    }
	
	onSelected(hero: Hero): void {
		console.log(hero);
		this.selectedHero = hero;
	}
	
}