import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hero',
  template: `
    {{hero}}
  `,
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input()
  name:string;
  
  constructor() {}

  ngOnInit() {
  }

}
