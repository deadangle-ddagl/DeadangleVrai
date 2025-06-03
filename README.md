# 🧠 DEAD ANGLE — Marketplace Numérique Sarcastique

Dead Angle est une plateforme décalée de vente, transfert et gestion de produits numériques absurdes à l’aide d’une monnaie interne : les points **DDAGL**.

## ⚙️ Stack Technique

- [x] Next.js 14 (App Router)
- [x] TailwindCSS
- [x] Prisma + PostgreSQL
- [x] Authentification avec NextAuth.js
- [x] Monnaie interne DDAGL (points, transferts, dons)
- [x] Système de composants modulaires
- [x] Forum Flarum (intégration prévue)

## 🗂 Structure

- `app/` : Pages (Lab, Produits, Dashboard…)
- `components/` : UI et composants fonctionnels
- `lib/` : Helpers (DB, auth, notifications)
- `prisma/` : Schéma, seed, migrations
- `styles/` : Styles globaux (tailwind + thèmes)
- `docs/` : Documentation technique

## 📦 Installation

```bash
git clone https://github.com/votre-org/deadangle.git
cd deadangle
npm install
npx prisma db push
npm run dev
