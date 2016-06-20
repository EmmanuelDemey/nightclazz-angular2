import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Hero} from './hero'
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import 'rxjs/Rx'; 

@Injectable()
export class HeroService {

  private _url:string = 'https://raw.githubusercontent.com/ggaulard/ggaulard.github.io/master/workshop/heroes';
  constructor(private http:Http) {}

  findHeroes():Observable<Hero[]>{
    return this.http.get(this._url)
      .map(data => data.json());
  }
}





