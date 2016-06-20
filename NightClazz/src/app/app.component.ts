import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <h1>{{projectName}}</h1>
      <ul>
        <li *ngFor="let hero of heroes">{{hero}}</li>
      </ul>
  `
})
export class AppComponent {
  title = 'app works!';

  projectName: string = 'Hello World !';

  heroes: string[] = ['Ironman', 'Le fauve'];
}
