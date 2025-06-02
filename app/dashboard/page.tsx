import { auth } from '@/lib/auth'
import { Card, BalanceChart, RecentTransactions } from '@/components/dashboard'
import { prisma } from '@/lib/db'

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) return redirect('/login')

  const [balance, transactions] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: { ddagl: true }
    }),
    prisma.transaction.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
      take: 5
    })
  ])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-ddagl-indigo">
        Mon Tableau de Bord
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Solde DDAGL" value={balance?.ddagl || 0} icon="💰" />
        <Card title="Produits" value={23} icon="🛍️" />
        <Card title="Transactions" value={transactions.length} icon="📊" />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <BalanceChart />
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  )
}// Dashboard code
