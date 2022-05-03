# This repo is used for Projet6 of OpenClassRooms 'Developpeur Web' course.

apt install mongodb ## Installation de mongodb
mkdir -p /data/db ## Création du répertoire par défaut de stockage des données
mongod ## lancement de mongodb

## Databases avant création 
> show dbs;
admin   0.000GB
config  0.000GB
local   0.000GB
## Databases après création de la DB du projet6 'piiquante'
> use piiquante
switched to db piiquante
> db
piiquante

## Création de l'utilisateur de la base de donnée 'piiquante':
> db.createUser({ user : "piiquante" , pwd : "Eiy4ieMohP" , roles : [{role: "userAdmin" , db: "piiquante"}]})
Successfully added user: {
	"user" : "piiquante",
	"roles" : [
		{
			"role" : "userAdmin",
			"db" : "piiquante"
		}
	]
}

## Installation de NodeJS
root@P-MPL-GREP:/home/roqua/Documents/Perso/OpenClassRoom/Projet6# curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - ## Angular
root@P-MPL-GREP:/home/roqua/Documents/Perso/OpenClassRoom/Projet6# sudo apt-get install -y nodejs ## NodeJS

## Installation de Angular CLI
root@P-MPL-GREP:/home/roqua/Documents/Perso/OpenClassRoom/Projet6# npm install -g @angular/cli

added 196 packages, and audited 197 packages in 7s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm notice 
npm notice New minor version of npm available! 8.6.0 -> 8.7.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v8.7.0
npm notice Run npm install -g npm@8.7.0 to update!
npm notice 

## Installation de Express et Nodemon
npm install express
npm install -g nodemon

## Installation de mongoose-unique-validator
npm install mongoose-unique-validator

