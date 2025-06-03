'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { register } from '@/lib/auth'

export default function RegisterForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirm) {
      setError('Les mots de passe ne correspondent pas.')
      return
    }

    try {
      const result = await register(email, password)
      if (result?.error) {
        setError(result.error)
      } else {
        router.push('/dashboard') // Rediriger vers le dashboard après inscription
      }
    } catch (err: any) {
      setError('Une erreur est survenue.')
      console.error(err)
    }
  }

  return (
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

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="w-full bg-ddagl-indigo text-white py-2 rounded-md hover:bg-ddagl-gold transition-colors">
        S'inscrire
      </button>

      <p className="text-sm text-center mt-4">
        Déjà inscrit ?{' '}
        <Link href="/login" className="text-ddagl-indigo hover:underline">
          Se connecter
        </Link>
      </p>
    </form>
  )
}
