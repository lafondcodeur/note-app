# 📝 NoteFlow - Application de Gestion de Notes

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)

Une application web moderne et intuitive de prise de notes développée avec React, permettant une organisation efficace de vos idées, tâches et réflexions.

## ✨ Fonctionnalités Principales

### 🎯 Gestion Complète des Notes
- **Création rapide** : Formulaire intuitif avec validation
- **Édition en temps réel** : Modification immédiate des contenus
- **Suppression sécurisée** : Confirmation avant suppression
- **Organisation visuelle** : Interface claire et responsive

### 🏷️ Système de Catégorisation Avancé
- 💼 **Travail** : Notes professionnelles et projets
- 🎯 **Personnel** : Tâches personnelles et idées  
- 💡 **Idées** : Inspirations et brainstormings

### ⚡ Priorités Intelligentes
- **🔴 Haute priorité** : Tâches urgentes et importantes
- **🟠 Priorité moyenne** : Tâches à faire sous peu
- **🟢 Basse priorité** : Notes informatives et idées

## 🛠️ Technologies Utilisées

| Domaine | Technologies |
|---------|--------------|
| **Frontend** | React 18, Hooks (useState) |
| **Styling** | Tailwind CSS, CSS-in-JS |
| **Architecture** | Components modulaires, State lifting |
| **Gestion d'état** | React State Management |
| **Build Tool** | Vite |

## 🎨 Interface Utilisateur

### Composants Réutilisables
- `<NoteForm />` - Formulaire de création de notes
- `<NoteList />` - Liste et affichage des notes
- `<Note />` - Carte de note individuelle
- Champs de formulaire réutilisables et modulaires

## 🚀 Installation et Utilisation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/votre-username/noteflow.git

# Accéder au dossier
cd noteflow

# Installer les dépendances
npm install

# Lancer l'application
npm run dev

```


###  Structure du Projet
```bash
src/
├── components/
│   ├── NoteForm.jsx          # Formulaire de création
│   ├── NoteList.jsx          # Affichage des notes
│   ├── Note.jsx              # Composant note individuelle
│   └── forms/
│       ├── InputField.jsx    # Champs réutilisables
│       └── SelectField.jsx   # Sélecteurs
├── App.jsx                   # Composant principal
└── main.jsx                  # Point d'entrée

