import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <h1>{{projectName}}</h1>
      <input [(ngModel)]="projectName" />
  `
})
export class AppComponent {
  title = 'app works!';

  projectName: string = 'Hello World !';
}
