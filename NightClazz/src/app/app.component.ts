import { Component } from '@angular/core';
import {Hero} from './shared';
import {HeroComponent} from './hero'
@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <h1>{{projectName}}</h1>
      <ul>
        <li *ngFor="let hero of heroes"><hero [hero]="hero"></hero></li>
      </ul>
  `,
  directives: [HeroComponent]
})
export class AppComponent {
  title = 'app works!';

  projectName: string = 'Hello World !';

  heroes: Hero[] = [new Hero('Ironman'), new Hero('Le fauve')];
}
