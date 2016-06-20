"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_1 = require('./shared');
var hero_1 = require('./hero');
var AppComponent = (function () {
    function AppComponent(heroService) {
        var _this = this;
        this.title = 'app works!';
        this.projectName = 'Hello World !';
        heroService.findHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            template: "\n      <h1>{{projectName}}</h1>\n      <ul>\n        <li *ngFor=\"let hero of heroes\"><hero [hero]=\"hero\"></hero></li>\n      </ul>\n  ",
            directives: [hero_1.HeroComponent]
        }), 
        __metadata('design:paramtypes', [shared_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map