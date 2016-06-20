import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; 

@Injectable()
export class HeroService {

  constructor() {}

  findHeroes():Observable<Hero[]>{
    return Observable.of([new Hero('Ironman'), new Hero('Le fauve')]);
  }
}
