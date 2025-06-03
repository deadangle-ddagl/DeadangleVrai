// app/products/page.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Product {
  id: number
  name: string
  description: string
  price: number
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Simule un appel à l'API (remplace par ton fetch réel)
    setProducts([
      { id: 1, name: 'Cafetière invisible', description: 'Ne fait rien, mais très chère.', price: 999 },
      { id: 2, name: 'Chaise sans pieds', description: 'Défiant la gravité.', price: 499 },
    ])
  }, [])

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-ddagl-indigo">Produits</h1>
        <Link href="/products/create">
          <button className="px-4 py-2 bg-ddagl-gold text-black rounded-xl hover:bg-ddagl-indigo hover:text-white transition">
            Ajouter un produit
          </button>
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="mt-2 font-bold text-ddagl-indigo">{product.price} DDAGL</p>
          </div>
        ))}
      </div>
    </main>
  )
}
