// app/admin/layout.tsx

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-ddagl-indigo text-white p-4 text-center text-xl font-bold">
        Panneau d'administration
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
