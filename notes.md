# Clone Trello Fullstack - Projet

## Description
Ce projet est un clone simplifié de Trello, une application de gestion de tâches en kanban.  
L’objectif est de recréer les principales fonctionnalités de Trello avec un front React + TailwindCSS et un backend Node.js exposant une API REST.

---

## Fonctionnalités Principales à Implémenter

### 1. Initialisation du Projet
- [x] Créer le repo Git et initialiser le projet front (React + TailwindCSS)
- [x] Initialiser le backend Node.js (Express ou autre)
- [ ] Mettre en place la connexion entre front et backend (proxy ou CORS)

---

### 2. Modèles et base de données
- [ ] Concevoir le modèle de données (Users, Boards, Lists, Cards, Comments, etc.)
- [ ] Implémenter la base de données (ex: MongoDB, PostgreSQL)
- [ ] Créer les migrations / schémas

---

### 3. Authentification
- [ ] Créer l’API d’inscription / connexion (JWT ou sessions)
- [ ] Gérer la persistance des sessions côté front
- [ ] Protéger les routes backend nécessitant une authentification

---

### 4. Gestion des Boards (Tableaux)
- [ ] API CRUD pour les boards
- [ ] Interface front pour créer, modifier, supprimer des boards
- [ ] Lister les boards de l’utilisateur connecté

---

### 5. Gestion des Lists (Colonnes)
- [ ] API CRUD pour les listes dans un board
- [ ] Interface front pour ajouter/modifier/supprimer des listes dans un board

---

### 6. Gestion des Cards (Cartes)
- [ ] API CRUD pour les cartes dans une liste
- [ ] Interface front pour ajouter/modifier/supprimer des cartes
- [ ] Déplacer les cartes entre listes (drag & drop)

---

### 7. Fonctionnalités Avancées des Cartes
- [ ] Ajouter une description aux cartes
- [ ] Ajouter des commentaires aux cartes
- [ ] Ajouter des labels/couleurs
- [ ] Ajouter des dates d’échéance
- [ ] Ajouter des membres assignés

---

### 8. Collaboration / Partage
- [ ] Permettre d’inviter d’autres utilisateurs sur un board
- [ ] Gérer les permissions (lecture, écriture)

---

### 9. Drag & Drop
- [ ] Implémenter le drag & drop pour réorganiser les listes dans un board
- [ ] Implémenter le drag & drop pour réorganiser les cartes dans une liste et entre listes

---

### 10. Notifications et Activités
- [ ] Enregistrer les actions (création, modification, suppression)
- [ ] Afficher un feed d’activités sur un board
- [ ] Notifications basiques (ex: nouvelle carte assignée)

---

### 11. Améliorations UI/UX
- [ ] Responsive design avec TailwindCSS
- [ ] Ajouter animations et transitions pour les interactions drag & drop
- [ ] Optimiser la performance front

---

### 12. Tests
- [ ] Écrire des tests unitaires backend (API)
- [ ] Écrire des tests frontend (composants, intégration)

---

### 13. Déploiement
- [ ] Préparer le projet pour production (build, variables d’environnement)
- [ ] Déployer backend (ex: Heroku, Render, Vercel functions)
- [ ] Déployer frontend (Netlify, Vercel, ou serveur statique)

---

## Notes personnelles et avancement

- [ ] Ajouter ici des notes spécifiques ou difficultés rencontrées  
- [ ] Marquer les tâches terminées au fur et à mesure en remplaçant [ ] par [x]

---

## Ressources utiles
- [Documentation React](https://reactjs.org/)
- [Documentation TailwindCSS](https://tailwindcss.com/docs)
- [Express.js](https://expressjs.com/)
- [Tutoriel Drag and Drop React](https://react-dnd.github.io/react-dnd/about)
- [API REST guide](https://restfulapi.net/)

---

## Comment contribuer ?
- Toujours créer une branche par fonctionnalité
- Faire des commits clairs et précis
- Tester avant de pousser

---

**Bon codage !** 🚀
