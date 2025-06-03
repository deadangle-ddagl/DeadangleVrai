// app/dashboard/layout.tsx

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="bg-ddagl-gold p-4 shadow-md">
        <ul className="flex gap-4 justify-center font-semibold">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/products">Produits</a></li>
          <li><a href="/transfer">Transferts</a></li>
        </ul>
      </nav>
      <section className="p-6">{children}</section>
    </div>
  )
}
