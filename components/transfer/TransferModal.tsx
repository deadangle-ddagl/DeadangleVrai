'use client'

import { useState } from 'react'

export default function TransferModal() {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')

  const handleTransfer = () => {
    alert(`Transféré ${amount} DDAGL à ${recipient}`)
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow space-y-4">
      <input
        type="text"
        placeholder="Destinataire"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full border p-2 rounded-xl"
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border p-2 rounded-xl"
      />
      <button onClick={handleTransfer} className="w-full bg-ddagl-indigo text-white py-2 rounded-xl">
        Transférer
      </button>
    </div>
  )
}
