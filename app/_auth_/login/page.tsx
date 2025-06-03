// app/_auth_/login/page.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add login logic
    console.log('Logging in:', form)
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6 text-ddagl-indigo">Connexion</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          required
        />
        <button type="submit" className="w-full bg-ddagl-indigo text-white py-3 rounded-xl hover:bg-ddagl-gold transition">
          Se connecter
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Pas encore inscrit ?{' '}
        <Link href="/_auth_/register" className="text-ddagl-indigo underline hover:text-ddagl-gold">
          Créer un compte
        </Link>
      </p>
    </>
  )
}
