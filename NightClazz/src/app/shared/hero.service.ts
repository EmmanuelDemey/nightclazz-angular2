import { Injectable } from '@angular/core';
import {Hero} from './hero'

@Injectable()
export class HeroService {

  constructor() {}

  findHeroes():Hero[]{
    return [new Hero('Ironman'), new Hero('Le fauve')];
  }
}
