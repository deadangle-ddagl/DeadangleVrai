import Link from 'next/link'

export function RecentTransactions({ transactions }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Transactions récentes</h3>
        <Link href="/transactions" className="text-sm text-ddagl-indigo hover:underline">
          Voir tout
        </Link>
      </div>

      <ul className="space-y-3">
        {transactions.map((tx) => (
          <li key={tx.id} className="flex justify-between">
            <div>
              <p className="font-medium">{tx.description}</p>
              <p className="text-sm text-gray-500">
                {new Date(tx.createdAt).toLocaleDateString()}
              </p>
            </div>
            <p className={`font-medium ${
              tx.amount >= 0 ? 'text-green-500' : 'text-red-500'
            }`}>
              {tx.amount >= 0 ? '+' : ''}{tx.amount} DDAGL
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
