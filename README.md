# 🎧 Probeats

> Maquette HTML haute-fidélité d'un site e-commerce audio, réalisée dans le cadre d'un devoir de maquettage web (Centre Européen de Formation).

---

## 📋 Description du projet

**Probeats** est une marque audio fictive créée en 2020, spécialisée dans les casques et enceintes Ultra-Haute-Qualité. Ce projet est une maquette fonctionnelle en HTML/CSS/JS du site e-commerce, avec navigation complète entre les pages.

---

## 🗂️ Structure des fichiers

```
probeats-boutique/
│
├── 📁 index/                    # Page d'accueil
│   ├── index.html
│   ├── index.css
│   └── index.js
│
├── 📁 produit/                  # Fiche produit
│   ├── produit.html
│   ├── produit.css
│   └── produit.js
│
├── 📁 commande/                 # Tunnel de commande
│   ├── commande.html
│   ├── commande.css
│   └── commande.js
│
├── 📁 connexion/                # Connexion / Inscription
│   ├── connexion.html
│   ├── connexion.css
│   └── connexion.js
│
├── 📁 about/                    # À propos
│   ├── about.html
│   ├── about.css
│   └── about.js
│
├── 📁 assistance/               # Assistance & FAQ
│   ├── assistance.html
│   ├── assistance.css
│   └── assistance.js
│
└── 📁 mentions-legales/         # Mentions légales
    ├── mentions-legales.html
    ├── mentions-legales.css
    └── mentions-legales.js
```

---

## 📄 Pages réalisées

| Page | Dossier | Description |
|------|---------|-------------|
| Accueil | `index/` | Hero animé, mise en avant des produits, témoignages clients |
| Produit | `produit/` | Fiche produit Casque Audio Pro X1 (299€), notation, caractéristiques |
| Commande | `commande/` | Tunnel d'achat avec livraison, paiement (carte/PayPal/Apple Pay) |
| Connexion | `connexion/` | Login / Inscription avec onglets et login social |
| À propos | `about/` | Histoire de la marque, timeline 2020→2024, points forts |
| Assistance | `assistance/` | Services contact, formulaire, FAQ interactive avec filtres |
| Mentions légales | `mentions-legales/` | Mentions légales, RGPD, CGV |

---

## 🎨 Charte graphique

### Palette de couleurs

| Nom | Code HEX | Aperçu | Usage |
|-----|----------|--------|-------|
| Dark | `#292A2D` | ⬛ | Fond principal |
| Teal Primary | `#009099` | 🟦 | Couleur principale, CTA |
| Teal Mid | `#41B4BB` | 🔵 | Survol, accents |
| Teal Light | `#7EDCE1` | 🩵 | Textes colorés, highlights |
| Warm | `#B6A299` | 🟫 | Accents chauds, détails |

### Typographie

- **Police principale** : [Barlow](https://fonts.google.com/specimen/Barlow) — Google Fonts
- **Graisses utilisées** : 300 (light) · 400 (regular) · 600 (semibold) · 700 (bold) · 900 (black)

### Grille

- **Desktop** : 12 colonnes, padding `24px`
- **Mobile** : 1 colonne, breakpoint à `900px`

---

## 🚀 Lancer le projet

### Option 1 — VS Code + Live Server (recommandé en local)

1. Télécharge et installe [Visual Studio Code](https://code.visualstudio.com/)
2. Ouvre VS Code, va dans **Extensions** (icône puzzle à gauche) et installe **Live Server** de Ritwick Dey
3. Ouvre le dossier du projet dans VS Code via **Fichier → Ouvrir le dossier**
4. Dans l'explorateur de fichiers, clique droit sur `index/index.html`
5. Clique sur **"Open with Live Server"**
6. Le site s'ouvre automatiquement sur `http://localhost:5500/index/index.html`

> ✅ Le site se rafraîchit automatiquement à chaque modification de fichier.

---

### Option 2 — GitHub Pages (en ligne, accessible depuis n'importe où)

1. Va sur [github.com/OrionLazu/probeats-boutique](https://github.com/OrionLazu/probeats-boutique)
2. Clique sur l'onglet **Settings** (engrenage en haut à droite)
3. Dans le menu gauche, clique sur **Pages**
4. Dans **"Build and deployment"**, configure :
   - **Source** : `Deploy from a branch`
   - **Branch** : `main` · `/root`
5. Clique sur **Save**
6. Attends 1 à 2 minutes, puis ton site est en ligne à :

```
https://orionlazu.github.io/probeats-boutique/index/index.html
```

> ✅ Accessible depuis n'importe quel appareil, sans rien installer.

---

## 🌿 Branches & Pull Requests

Ce projet utilise un workflow Git avec une branche par fonctionnalité :

| Branche | Pull Request | Contenu |
|---------|-------------|---------|
| `feature/accueil` | PR #1 | `index/` — Page d'accueil |
| `feature/boutique` | PR #2 | `produit/` + `commande/` — Pages boutique |
| `feature/compte` | PR #3 | `connexion/` — Page compte |
| `feature/support` | PR #4 | `about/` + `assistance/` + `mentions-legales/` — Pages support |

---

## 🛒 Produits du catalogue

| Produit | Prix | Description |
|---------|------|-------------|
| Casque Audio Pro X1 | 299€ | Casque premium, réduction de bruit active |
| Enceinte Bluetooth | 189€ | Enceinte portable haute qualité |
| Enceinte Studio | 449€ | Enceinte de monitoring professionnelle |

---

## 🔗 Liens

- **Repository** : [github.com/OrionLazu/probeats-boutique](https://github.com/OrionLazu/probeats-boutique)
- **Site en ligne** : [orionlazu.github.io/probeats-boutique](https://orionlazu.github.io/probeats-boutique)

---

## 👤 Auteur

**OrionLazu** — Projet réalisé dans le cadre d'une formation au Centre Européen de Formation (CEF).

---

*Projet fictif à but pédagogique — Probeats © 2026*
