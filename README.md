// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-ddagl-indigo">Bienvenue sur Dead Angle</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Votre marketplace numérique est opérationnelle. Explorez, vendez, transférez, gérez.
      </p>
      <div className="mt-8 space-x-4">
        <Link href="/products">
          <button className="px-6 py-3 bg-ddagl-indigo text-white rounded-xl hover:bg-ddagl-gold transition-colors">
            Voir les Produits
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="px-6 py-3 border border-ddagl-indigo text-ddagl-indigo rounded-xl hover:bg-ddagl-indigo hover:text-white transition-colors">
            Aller au Dashboard
          </button>
        </Link>
      </div>
    </main>
  )
}
