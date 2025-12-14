# 🎓 Stagiaires Management App

Application web développée avec **React** permettant la gestion et la visualisation d’une liste de stagiaires.  
Elle offre une interface moderne, une navigation fluide et des statistiques automatiques sur les notes.

---

## ✨ Fonctionnalités

- 📋 Affichage de la liste des stagiaires
- 🔍 Recherche dynamique par nom
- 📊 Statistiques automatiques :
  - Moyenne maximale
  - Moyenne minimale
  - Moyenne totale
- ➕ Navigation vers une page d’ajout de stagiaire
- 🧭 Navigation SPA avec React Router
- 🎨 Design responsive avec Bootstrap

---

## 🛠️ Stack Technique

- **React** (Hooks : `useState`, `useEffect`)
- **React Router DOM**
- **Bootstrap 5**
- **JavaScript ES6**
- **HTML5 / CSS3**

---

## 📁 Architecture du Projet
stagiaires-management-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   └── ListStagiaires.jsx     # Affichage, recherche et statistiques
│   │
│   ├── data.js                   # Données initiales des stagiaires
│   │
│   ├── Navbar.jsx                # Barre de navigation
│   ├── AddStagiaire.jsx          # Page d’ajout d’un stagiaire
│   ├── App.jsx                   # Composant principal (Router)
│   ├── index.js                  # Point d’entrée React
│   │
│   └── styles/
│       └── bootstrap.min.css     # Styles Bootstrap (optionnel)
│
├── screenshots/                  # Captures d’écran du projet
│   ├── home.png
│   ├── search.png
│   └── add.png
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

