#!/bin/bash

echo "⚙️ Build de l'application..."
npm run build

echo "📦 Déploiement des migrations Prisma..."
npx prisma migrate deploy

echo "🚀 Lancement du serveur..."
npm start
