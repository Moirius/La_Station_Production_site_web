#!/bin/bash

# Pas besoin d'installation de dépendances npm/pnpm
# Active simplement les outils utiles pour analyse statique

# Installer ESLint et un serveur simple si jamais tu veux l'étendre
npm install -g eslint serve

# Lancer un petit serveur statique si besoin plus tard
# serve . -l 5000

# Tu peux ajouter des vérifications optionnelles ici si Codex doit valider l'intégrité du HTML/CSS
