# Projet MongoDB Books

## Groupe 5

- Knafo Jeff
- Pinau Lionel

## Présentation

Ce projet est une API REST développée avec Node.js, Express et MongoDB permettant de gérer :
- une collection de livres
## Prérequis

- Node.js (v16 ou supérieur recommandé)
- MongoDB (local ou distant)

## Installation

1. **Cloner le dépôt**
   ```sh
   git clone <url-du-repo>
   cd mongo-db-books
   ```

2. **Installer les dépendances**
   ```sh
   npm install
   ```

3. **Configurer les variables d'environnement**
   - Copier le fichier `.env.example` en `.env`
   - Adapter les valeurs si besoin (notamment `MONGODB_URI`)

4. **Lancer la base de données MongoDB**
   - S'assurer que MongoDB est démarré sur votre machine (par défaut sur `mongodb://127.0.0.1:27017/book`).

## Lancement du projet

- **En mode développement (avec rechargement automatique)**
  ```sh
  npm run dev
  ```

- **En mode production**
  ```sh
  npm start
  ```

Le serveur sera accessible sur [http://localhost:3000](http://localhost:3000) (ou le port défini dans `.env`).

## Peupler la base de données (seed)

Pour insérer des données de test (livres) :
```sh
npm run seed
```

## Structure du projet

- `app.js` : configuration de l’application Express
- `server.js` : point d’entrée du serveur
- `config/db.js` : connexion à la base MongoDB
- `models/` : schémas Mongoose (`Book`)
- `controllers/` : logique métier pour chaque ressource
- `routes/` : routes Express pour chaque ressource
- `seed/` : scripts pour peupler la base de données

## Endpoints principaux

- `/livres` : gestion des livres
- `/pokemons` : gestion des pokémons
- `/trainers` : gestion des dresseurs et de leurs équipes

## Exemple de requêtes

- Récupérer tous les livres : `GET /livres`
## Licence

Projet réalisé dans le cadre scolaire.