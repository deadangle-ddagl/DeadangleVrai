export function Card({
  title,
  value,
  icon
}: {
  title: string
  value: number
  icon: string
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="mt-2 text-3xl font-bold text-ddagl-indigo">
        {typeof value === 'number' ? value.toFixed(2) : value}
      </p>
    </div>
  )
}
