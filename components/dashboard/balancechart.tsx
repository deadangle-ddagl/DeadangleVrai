// components/dashboard/BalanceChart.tsx
export default function BalanceChart() {
  const data = [40, 60, 80, 20, 100, 70]
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Solde mensuel</h2>
      <div className="flex items-end space-x-2 h-40 border-b border-gray-200">
        {data.map((value, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="bg-blue-500 w-6 rounded-t"
              style={{ height: `${value * 1.2}px` }}
            ></div>
            <span className="text-sm mt-1">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
