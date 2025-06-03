// app/dashboard/page.tsx
'use client'

import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-ddagl-indigo mb-6">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <Link href="/dashboard/profile">
          <div className="cursor-pointer p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibold">Mon Profil</h2>
            <p className="text-sm text-gray-600">Modifier mes infos, avatar et préférences.</p>
          </div>
        </Link>
        <Link href="/dashboard/products">
          <div className="cursor-pointer p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibold">Mes Produits</h2>
            <p className="text-sm text-gray-600">Voir, modifier ou supprimer mes produits absurdes.</p>
          </div>
        </Link>
        <Link href="/dashboard/transactions">
          <div className="cursor-pointer p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-semibold">Transactions</h2>
            <p className="text-sm text-gray-600">Historique des achats, ventes et transferts de points.</p>
          </div>
        </Link>
      </div>
    </main>
  )
}
