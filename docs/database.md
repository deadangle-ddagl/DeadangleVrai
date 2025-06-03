# Schéma de base de données - DEAD ANGLE

## Tables principales
- `User` : email, nom, mot de passe hashé, rôle
- `Product` : nom, description, points, propriétaire
- `Transaction` : montant, type (achat/vente/transfert), date
- `Notification` : message, lu/non lu, utilisateur

## Points clés
- Relations `User ↔ Product`
- Historique des transferts
- Système DDAGL interne uniquement
