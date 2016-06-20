import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'hero',
  template: `
    {{hero.name}}<img [src]="hero.picture" />
  `,
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input()
  hero:Hero;
  
  constructor() {}

  ngOnInit() {
  }

}
