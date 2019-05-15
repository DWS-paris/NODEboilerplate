# NODEboilerplate

Pour utiliser ce rerpo vous devez dans un premier temps installer les dépendances :

```bash
npm i
```

Vous devez ensuite créer un fichier `.env` contenant au minimum la variable suivante

```bash
PORT = <your-selected-port>
```

Le données sont stockées sur une BDD MySql, vous devez avant d'utiliser ce repo créer une base de données `node-boiler-plate` contenant une table `post` structurées de la manière suivante :

```bash
_id: Integer (AI)
title: VARCHAR(255)
content: VARCHAR(255)
```

Le fichier `package.json` utilise le module `nodemon` au niveau du script `start`, il vous ai donc conseillé d'installer ce module en global avant de lancer la commande :

```bash
npm start
```
