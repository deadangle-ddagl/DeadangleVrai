// app/(auth)/_auth_/login/page.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: remplacer par une logique d'authentification réelle
    console.log('Login', { email, password })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border rounded-md px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-ddagl-indigo text-white py-2 rounded-md hover:bg-ddagl-gold transition-colors">
          Se connecter
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Pas encore inscrit ?{' '}
        <Link href="/register" className="text-ddagl-indigo hover:underline">
          Créer un compte
        </Link>
      </p>
    </div>
  )
}
