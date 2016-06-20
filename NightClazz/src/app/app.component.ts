import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
      <h1>{{projectName}}</h1>
      <input [(ngModel)]="projectName" />
      <button (click)="displayProjectName()">Display Project Name</button>
  `
})
export class AppComponent {
  title = 'app works!';

  projectName: string = 'Hello World !';

  displayProjectName(){
    alert(this.projectName);
  }
}
