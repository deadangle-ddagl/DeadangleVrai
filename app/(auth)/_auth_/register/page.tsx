// app/(auth)/_auth_/register/page.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas.")
      return
    }

    // TODO: remplacer par une logique d’inscription réelle
    console.log('Register', { email, password })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Créer un compte</h2>
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
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          className="w-full border rounded-md px-4 py-2"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-ddagl-indigo text-white py-2 rounded-md hover:bg-ddagl-gold transition-colors">
          S'inscrire
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        Déjà inscrit ?{' '}
        <Link href="/login" className="text-ddagl-indigo hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  )
}
