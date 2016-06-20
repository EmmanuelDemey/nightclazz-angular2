# nightclazz-angular2

[![Gitter](https://badges.gitter.im/Gillespie59/nightclazz-angular2.svg)](https://gitter.im/Gillespie59/nightclazz-angular2?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Installation

```shell
npm install -g angular-cli

ng -v

ng new NightClazz

cd NightClazz

ng serve
```

Si vous avez des soucis pour installer `angular-cli`, vous trouverez tout dans ce repository. Voici la marche à suivre : 

```shell
git clone https://github.com/Gillespie59/nightclazz-angular2

rm -Rf NightClazz

cd angular-cli

npm install

ng link

cd ..

./node_modules/angular-cli/bin/ng new NightClazz

cd NightClazz

./node_modules/typings/dist/bin install

ng serve
```