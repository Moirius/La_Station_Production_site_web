# Guide pour Codex

## 📁 Structure du projet

Ce site est statique (HTML/CSS/JS) sans framework, ni dépendance Node.js.

## 🧪 Vérifications

- Valider `index.html` et `chatbot.html` (structure, accessibilité)
- Analyser les JS : `script.js`, `chatbot.js`, `navigation.js`
- Analyser les CSS : `styles.css`, `chatbot.css`
- Lancer le site en local avec un serveur statique si nécessaire (`serve . -l 5000`)

## ✅ Tâches typiques

- Identifier et corriger les bugs JavaScript
- Optimiser les performances (ex : lazy loading)
- Proposer des améliorations UX
- Ajouter des tests visuels ou unitaires légers si besoin

## 🧠 Remarques

- Le chatbot utilise une API distante (ne pas modifier l’URL de l’API)
- Les vidéos sont chargées depuis `videos.json` et affichées dynamiquement
