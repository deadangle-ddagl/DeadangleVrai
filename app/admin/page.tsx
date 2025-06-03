// app/admin/page.tsx
'use client'

import { useEffect, useState } from 'react'

interface User {
  id: string
  name: string
  email: string
  role: string
  points: number
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // TODO: Remplacer par un appel API réel
    setUsers([
      { id: '1', name: 'Aziz', email: 'aziz@deadangle.io', role: 'admin', points: 2000 },
      { id: '2', name: 'TrollUser', email: 'troll@deadangle.io', role: 'user', points: 120 },
    ])
  }, [])

  return (
    <main className="min-h-screen px-4 py-10 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-ddagl-indigo mb-6 text-center">Admin Panel</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ddagl-indigo text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Nom</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Rôle</th>
              <th className="p-3 text-left">DDAGL Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
