# Site Vitrine SIGL

## Description

Le site vitrine SIGL est le site de présentation de la majeure Système Information & Génie Logiciel (SIGL) d'EPITA. Ce site met en avant la majeure SIGL en détaillant les différents modules avec leurs cours, les projets de la majeure, des citations et des photos des promotions précédentes, ainsi qu'un moyen de contacter SIWEB et un lien vers l'intranet SIGL.


## Installation

Pour installer et configurer le projet, suivez les étapes ci-dessous :
1. Clonez le projet et accéder au projet :
   ```bash
   git clone git@github.com:SIGL-SIWEB/site_vitrine_rebuild.git && cd site_vitrine_rebuild/
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Démarrez le projet en mode développement :
   ```bash
   npm run dev
   ```
4. Accédez au site via [http://localhost:3000](http://localhost:3000).


## Usage

Le projet est organisé de la manière suivante :

- `/src/app/`, vous trouverez les dossiers correspondant à chaque page (alumnis, contact, courses, home, project).
- `/src/app/asset/`, vous trouverez toutes les images, photos et icônes utilisées.
- `/src/app/styles/`, vous trouverez les fichiers de styles CSS.
- `/public/locales/`, vous trouverez les fichiers utilisés pour la traduction du site, un fichier par langue.


## Fonctionnalités

- Home : La page d'accueil présente la majeure avec les quatre modules et leur description, des citations d'alumnis, des exemples de projets de la majeure, les opportunités de débouchés après la majeure, et un carousel d'événements SIGL.
- Courses : La page des cours détaille chaque module avec le nom des professeurs, leurs professions, et la description des cours.
- Project : La page des projets décrit les projets réalisés dans le cadre des cours associés.
- Alumnis : Cette page présente les promotions passées de SIGL avec une photo de classe et le nom des délégués.
- Contact : La page de contact permet de contacter SIWEB pour poser des questions sur la majeure.


## Documentation

Ce projet a été réalisé avec [Next.js](https://nextjs.org/):

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
