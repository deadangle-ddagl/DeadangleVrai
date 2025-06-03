// app/transfer/layout.tsx

export default function TransferLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900">
      <header className="bg-ddagl-indigo text-white py-4 px-6 shadow-md">
        <h1 className="text-xl font-bold">Espace Transfert</h1>
      </header>
      <main className="p-6 max-w-4xl mx-auto">{children}</main>
    </div>
  )
}
