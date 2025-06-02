'use client'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export function BalanceChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Solde DDAGL',
        data: [120, 190, 300, 250, 420],
        borderColor: '#4f46e5', // Couleur ddagl-indigo
        tension: 0.4
      }
    ]
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-medium mb-4">Historique du solde</h3>
      <Line data={data} />
    </div>
  )
}
