import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment} from './app/';
import {HeroService} from './app/shared'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HeroService]);

