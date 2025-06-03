# Authentification - DEAD ANGLE

## NextAuth.js
- Provider : `credentials`
- Hash des mots de passe : `bcryptjs`
- AuthOptions défini dans `api/auth/[...nextauth]/options.ts`

## Structure recommandée
- `lib/auth.ts` : config `NextAuth` centralisée
- `middleware.ts` : redirections sécurisées
- `app/(auth)/layout.tsx` : layout de connexion/inscription
