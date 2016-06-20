import { Component } from '@angular/core';
import {Hero, HeroService, HeroPipe} from './shared';
import {HeroComponent} from './hero'
 
@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <h1>{{projectName}}</h1>
      <input [(ngModel)]="filterhero" />
      <ul>
        <li *ngFor="let hero of (heroes | heroFilter:filterhero)"><hero [hero]="hero"></hero></li>
      </ul>
  `,
  directives: [HeroComponent],
  pipes: [HeroPipe]
})
export class AppComponent {
  title = 'app works!';

  projectName: string = 'Hello World !';

  heroes: Hero[];
  
  constructor(heroService:HeroService){
    heroService.findHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
