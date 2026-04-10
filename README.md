# ⚛️ TP React Hooks — Débutant

> Un projet pédagogique pour apprivoiser les hooks React les plus utiles :
> `useReducer`, `useRef`, `useEffect` et les hooks personnalisés.

---

## 🎬 Démonstration vidéo

---


https://github.com/user-attachments/assets/aa36ae65-cade-4bb1-b2ba-89e05a5f45b1


---

## 🧠 C'est quoi ce projet ?

Ce TP a été réalisé dans le cadre d'un cours sur React. L'idée était simple : sortir de `useState` et explorer des hooks plus puissants pour gérer des cas concrets — un compteur avec logique métier, un focus automatique, un timer qui se nettoie proprement, et une vraie récupération de données depuis une API publique.

Chaque composant est volontairement petit et isolé pour que ce soit facile à lire, comprendre, et réutiliser.

---

## 📁 Structure du projet

```
tp-hooks-perso/
├── public/
├── src/
│   ├── App.js               ← Point d'entrée, assemble tous les composants
│   ├── Compteur.js          ← useReducer : compteur avec +1 / −1 / reset
│   ├── FocusInput.js        ← useRef : focus automatique sur un champ
│   ├── CompteurRendu.js     ← useRef + useEffect : nombre de rendus affiché
│   ├── useFetch.js          ← Hook personnalisé : récupération d'API propre
│   ├── ListeArticles.js     ← Utilise useFetch pour afficher des articles
│   └── Timer.js             ← useEffect avec nettoyage : timer pause/reset
├── package.json
└── README.md
```

---

##  Lancer le projet

### Prérequis

- [Node.js](https://nodejs.org/) version 16 ou supérieure
- npm (inclus avec Node.js)

### Installation

```bash
# 1. Cloner le projet
git clone https://github.com/ton-pseudo/tp-hooks-perso.git
cd tp-hooks-perso

# 2. Installer les dépendances
npm install

# 3. Démarrer l'application
npm start
```

La page s'ouvre automatiquement sur **http://localhost:3000** 

---

## 🔍 Ce qu'on apprend dans chaque composant

###  `Compteur.js` — `useReducer`

Au lieu d'utiliser `useState` pour chaque valeur, on centralise toute la logique dans une fonction `reducer`. C'est beaucoup plus propre dès qu'on a plusieurs actions possibles.

```
Action "increment" → count + 1
Action "decrement" → count − 1
Action "reset"     → count = 0
```

> 💡 Pense au reducer comme à un chef d'orchestre : il reçoit une demande et décide quoi faire, sans que le composant ait besoin de savoir comment.

---

###  `FocusInput.js` — `useRef` (manipulation du DOM)

`useRef` permet d'accéder directement à un élément HTML sans déclencher de re-render. Ici on l'utilise pour placer le curseur dans un champ texte au clic d'un bouton.

> 💡 `ref`, c'est comme un post-it collé sur un élément HTML — tu peux interagir avec lui directement, sans passer par l'état React.

---

###  `CompteurRendu.js` — `useRef` (valeur persistante)

`useRef` ne sert pas qu'au DOM. On peut aussi s'en servir pour stocker une valeur qui persiste entre les rendus **sans** provoquer de nouveau rendu quand elle change.

> 💡 C'est la grande différence avec `useState` : modifier un `ref` est silencieux pour React.

---

###  `useFetch.js` — Hook personnalisé

Un hook personnalisé, c'est juste une fonction qui commence par `use` et qui utilise d'autres hooks à l'intérieur. Ici on crée `useFetch` pour ne pas répéter la logique de fetch dans chaque composant.

Il gère automatiquement :
- l'état de chargement (`chargement`)
- les données reçues (`data`)
- les erreurs réseau (`erreur`)
- l'annulation propre de la requête si le composant disparaît (`AbortController`)

> 💡 C'est le principe DRY (Don't Repeat Yourself) appliqué aux hooks React.

---

### 📋 `ListeArticles.js` — Utilisation de `useFetch`

Ce composant montre `useFetch` en action. Il récupère des articles depuis une API publique ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)) et les affiche dans une liste scrollable avec gestion des états de chargement et d'erreur.

---

### ⏱️ `Timer.js` — `useEffect` avec nettoyage

`setInterval` continue de tourner même si le composant est retiré de la page. C'est pour ça qu'on retourne une fonction de nettoyage dans `useEffect` — elle arrête le timer proprement.

> 💡 Sans `clearInterval`, tu aurais des comportements bizarres et des fuites mémoire. Le nettoyage, c'est comme éteindre la lumière en quittant une pièce.

---



## 🧩 Exercices facultatifs réalisés

- [x] Bouton **Reset** dans `Compteur.js`
- [x] Bouton **Pause / Reprendre** dans `Timer.js`
- [x] Bouton **Reset** dans `Timer.js`
- [ ] Hook `useLocalStorage` *(non réalisé)*
- [ ] Affichage de l'heure en temps réel *(non réalisé)*

---

## 📦 Dépendances

Ce projet n'utilise que ce qui est fourni par `create-react-app` — aucune librairie supplémentaire.

| Outil | Rôle |
|---|---|
| React 18 | Bibliothèque UI |
| JSONPlaceholder | API publique gratuite pour les tests fetch |
| create-react-app | Outil de démarrage du projet |

---

## 👤 Auteur

Salma Laouy
Étudiante en 3ème année —ENS MARRAKECH
Année universitaire 2025-2026

---

> *Ce projet fait partie d'une série de TPs pratiques sur React.*
