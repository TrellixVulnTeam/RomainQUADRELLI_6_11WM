# Ce repo git contient les fichiers en lien avec le Projet 6 d'OpenClassRoom : Construisez une API sécurisée pour une application d'avis gastronomiques

## Prérequis
Afin de pouvoir faire fonctionner ce projet, les paquets suivants sont nécessaires (Linux):
- nodejs
- angular/cli
- mongo (dans le cas d'une base de données hébergée localement)
Afin de faire fonctionner NodeJs, les modules suivants sont nécessaires:
- mongoose-unique-validator
- express
- nodemon
- cors
- body-parser
- path
- multer
- bcrypt
- jsonwebtoken 

## Introduction
Ce projet se compose de deux briques:
- FrontEnd: Angular
- Backend: NodeJs

Afin de démarrer Angular, il faut effectuer les commandes suivantes depuis la racine du repo:
```
cd dist/hot-takes/
ng serve
```
Afin de démarrer NodeJs, il faut effectuer les commandes suivantes depuis la racine du repo:
```
cd api/
nodemon server
```

Une fois cela effectué, la page Web est accessible en localhost sur le port 4200 (à condition que ce dernier ne soit pas déjà utilisé par une autre application).

