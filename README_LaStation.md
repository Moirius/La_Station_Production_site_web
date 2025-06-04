# 🎥 La Station Production - Site Web Officiel

Ce dépôt contient le code source du site web de **La Station Production**, une agence audiovisuelle basée à Rennes spécialisée dans la création de contenus vidéo : clips, lives, reportages, aftermovies, etc.

---

## 🌐 Aperçu

- Grille interactive de vidéos avec filtres dynamiques  
- Chatbot intelligent avec réponses préprogrammées ou via API IA  
- Design responsive et immersif  
- Chargement dynamique des miniatures via JSON  
- Interface minimaliste en dark mode  

---

## 🗂 Arborescence des fichiers

📁 root/  
├── index.html              → Page d'accueil avec moodboard vidéo  
├── chatbot.html            → Interface chatbot  
├── chatbot.js              → Logique du chatbot  
├── chatbot.css             → Styles spécifiques au chatbot  
├── script.js               → Gestion des vidéos, modale et interactions  
├── navigation.js           → Mouvement fluide de la grille  
├── styles.css              → Feuille de styles principale  
├── videos.json             → Données des vidéos et crédits  
├── robots.txt              → Directives pour les moteurs de recherche  


---

## 🛠 Technologies utilisées

- HTML5 / CSS3 / JavaScript  
- Fetch API pour requêtes backend (chatbot)  
- ScrollBooster & Hammer.js pour la navigation fluide  
- JSON dynamique pour chargement des vidéos  
- Responsive design avec media queries  
- API Markdown (marked.js) pour affichage riche des réponses chatbot  

---

## 💬 Fonctionnalité du chatbot

- Réponses FAQ intégrées (fallback)  
- Mode connecté avec serveur distant : https://chatbot-o4gm.onrender.com  
- Affichage progressif façon "machine à écrire"  
- Boutons de raccourcis cliquables pour les questions fréquentes  

---


## 📦 Ajouter de nouvelles vidéos

1. Ajouter les fichiers miniature dans le dossier correspondant (miniatures/…)  
2. Ajouter une entrée dans `videos.json` avec les propriétés :  
   - title, url, format, type, miniatureRoot, miniatures[], credits{}  
3. Les vidéos se chargent automatiquement  

---

## 🧠 À propos

Développé par l’équipe de **La Station Production** pour mettre en avant leur travail vidéo de manière interactive, immersive et professionnelle.

---

## 📨 Contact

- Email : contact@lastation-prod.com  
- Instagram : https://instagram.com/lastation.prod  
- Téléphone : 07 80 83 37 44  

---

## 📄 Licence

Ce projet est privé.  
Tous droits réservés © La Station Production.
