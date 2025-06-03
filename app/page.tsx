// app/page.tsx
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
      <h1 className="text-4xl md:text-6xl font-extrabold text-ddagl-indigo drop-shadow-sm">
        Bienvenue sur <span className="text-ddagl-gold">Dead Angle</span>
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-xl">
        Votre marketplace numérique est opérationnelle. Explorez, vendez, transférez, gérez.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link href="/products" passHref>
          <span
            role="button"
            tabIndex={0}
            className="inline-block px-6 py-3 bg-ddagl-indigo text-white rounded-xl hover:bg-ddagl-gold hover:text-black transition-colors cursor-pointer"
          >
            Voir les Produits
          </span>
        </Link>

        <Link href="/dashboard" passHref>
          <span
            role="button"
            tabIndex={0}
            className="inline-block px-6 py-3 border border-ddagl-indigo text-ddagl-indigo rounded-xl hover:bg-ddagl-indigo hover:text-white transition-colors cursor-pointer"
          >
            Aller au Dashboard
          </span>
        </Link>
      </div>
    </main>
  )
}
