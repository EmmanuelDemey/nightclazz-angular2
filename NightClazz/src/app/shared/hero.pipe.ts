import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from './hero';

@Pipe({
  name: 'heroFilter'
})
export class HeroPipe implements PipeTransform {

  transform(value: Hero[], filter:string): Hero[] {
    if(!value){
      return;
    }
    if(!filter){
      return value;
    }
    return value.filter(h => h.name.indexOf(filter) >= 0);
  }

}
