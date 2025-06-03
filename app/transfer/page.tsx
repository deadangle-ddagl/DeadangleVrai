// app/transfer/page.tsx
'use client'

import { useState } from 'react'

export default function TransferPage() {
  const [form, setForm] = useState({
    toUser: '',
    amount: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: call API to perform the transfer
    console.log('Transfer to:', form.toUser, 'Amount:', form.amount)
  }

  return (
    <main className="min-h-screen px-4 py-12 flex flex-col items-center justify-start bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-ddagl-indigo mb-6">Transférer des DDAGL Points</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="toUser"
            type="text"
            placeholder="Nom d'utilisateur du destinataire"
            value={form.toUser}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />
          <input
            name="amount"
            type="number"
            placeholder="Montant à transférer"
            value={form.amount}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
            min={1}
          />
          <button
            type="submit"
            className="w-full bg-ddagl-indigo text-white py-3 rounded-xl hover:bg-ddagl-gold transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </main>
  )
}
