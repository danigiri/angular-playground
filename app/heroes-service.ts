import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer  } from 'rxjs/Observer';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
  { id: 21, name: 'Grimer' }
];

@Injectable()
export class HeroesService {

	get() {
		return HEROES; 
	}

	getObservable() {
		return Observable.create((o:Observer<Array<Hero>>) => {
			o.next(HEROES);
			o.complete();
		});
	} 
}
