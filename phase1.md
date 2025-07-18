## Étape 1 – Création des pages principales

**Objectif : Préparer la navigation publique (SSR)**

- [ ] `/` → **Landing Page**
- [ ] `/about` → **En savoir plus**
- [ ] `/contact` → **Page contact**
- [ ] `/login` → **Connexion**
- [ ] `/signup` → **Inscription**

**Chaque page doit être SSR (via `export const dynamic = 'force-dynamic'` ou `getServerSideProps` selon méthode).**

---

## Étape 2 – Routage avec Next.js

**Objectif : Avoir une navigation fluide entre les pages**

- [ ] Utiliser le **routage via `app/` directory** (`app/page.tsx`, `app/about/page.tsx`, etc.)
- [ ] Créer un composant `Navbar` + `Footer` partagés
- [ ] Ajouter un layout principal dans `app/layout.tsx` avec `children`

---

## Étape 3 – Création des composants UI dans `packages/ui`

**Objectif : Développer un design system réutilisable**

Dans `packages/ui` :

- [ ] Installer **Storybook** (`pnpm dlx storybook@latest init`)
- [ ] Créer les composants suivants :

  - [ ] `Button` (primaire, secondaire, avec icône)
  - [ ] `Card` (pour les sections en landing page)
  - [ ] `Navbar`
  - [ ] `Footer`
  - [ ] `Input`, `Textarea`, `Form`
  - [ ] `Heading`, `Text`
  - [ ] `Section` reusable layout

**Exporter tous les composants proprement** depuis `index.ts`.

---

## Étape 4 – Intégration des composants dans l’app front

Dans `apps/frontend` :

- [ ] Ajouter un alias ou un import via `packages/ui`
      Exemple via `tsconfig.json` :

  ```json
  {
    "compilerOptions": {
      "paths": {
        "@ui/*": ["../../packages/ui/src/*"]
      }
    }
  }
  ```

- [ ] Utiliser les composants UI dans les pages :

  - `/` → Hero, Features, CTA, Testimonials, Footer
  - `/about` → Texte + images + CTA
  - `/contact` → Formulaire de contact (non fonctionnel pour le moment)

---

## Étape 5 – Création des pages Auth (SSR)

**Objectif : Préparer les pages d’inscription et connexion (UI + routing + SSR)**

- [ ] `/login` → formulaire de connexion
- [ ] `/signup` → formulaire d’inscription
- [ ] Utiliser les composants UI (`Form`, `Input`, `Button`, etc.)
- [ ] Intégrer la logique SSR (`getServerSideProps` ou `middleware.ts` plus tard pour redirection si connecté)

---

## Étape 6 – Contenu statique & SEO

**Objectif : Avoir une landing page prête à être indexée**

- [ ] Ajouter balises `title`, `description` (via `next/head` ou `metadata` dans `app/`)
- [ ] Ajouter favicon, logo
- [ ] Ajouter une section “avantages”, “fonctionnalités”, “pourquoi nous choisir”, etc.
- [ ] Responsive design via TailwindCSS

---

## Étape 7 – Gestion des assets et styles globaux

- [ ] Configurer TailwindCSS (dans `frontend`)
- [ ] Ajouter un fichier `globals.css` avec typographie, couleurs, thèmes
- [ ] Définir la palette de couleur, typographie, breakpoints
- [ ] Gérer l’import global des styles dans `app/layout.tsx`

---

## ✅ Étape 8 – Tests visuels avec Storybook

Dans `packages/ui` :

- [ ] Tester tous les composants dans Storybook
- [ ] Vérifier les variations (ex: `Button variant="outline"`, `Input with error`, etc.)
- [ ] Ajouter une story par composant avec exemples

---

## 🚀 Étape 9 – Première preview et test complet

- [ ] Lancer le projet avec `pnpm dev` (ou `pnpm --filter frontend dev`)
- [ ] Tester toutes les routes manuellement
- [ ] Vérifier le rendu SSR (code source HTML chargé côté serveur)

---

## 📝 Étape 10 – Checklist finale Phase 1

| Élément                                                            | Statut |
| ------------------------------------------------------------------ | ------ |
| Structure PNPM ok                                                  | ⬜     |
| Pages créées (`/`, `/about`, `/contact`, `/login`, `/signup`)      | ⬜     |
| Composants Storybook (`Navbar`, `Footer`, `Button`, `Input`, etc.) | ⬜     |
| Routage Next.js avec layout                                        | ⬜     |
| Landing page responsive avec contenu réel                          | ⬜     |
| Auth UI prête                                                      | ⬜     |
| TailwindCSS configuré                                              | ⬜     |
| Intégration des composants dans frontend                           | ⬜     |
| SEO basique mis en place                                           | ⬜     |

---

## 🛠️ Outils utilisés

- 🧶 `pnpm`
- 🧱 `Storybook` pour les composants
- 🎨 `TailwindCSS` pour le style
- 🧩 `React`, `TypeScript`
- ⚙️ `Next.js` pour le SSR + routing

---

Souhaites-tu que je t’aide maintenant à :

- Initialiser Storybook dans `packages/ui` ?
- Configurer les alias pour importer les composants dans `frontend` ?
- Faire un squelette de landing page Next.js avec SSR déjà prêt ?
