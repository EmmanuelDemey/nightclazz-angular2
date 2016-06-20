import { Component } from '@angular/core';
import { HeroComponent } from './hero';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <h1>{{projectName}}</h1>
      <ul>
        <li *ngFor="let hero of heroes"><hero name="hero"></hero></li>
      </ul>
  `,
  directives: [HeroComponent]
})
export class AppComponent {
  title = 'app works!';

  projectName: string = 'Hello World !';

  heroes: string[] = ['Ironman', 'Le fauve'];
}
