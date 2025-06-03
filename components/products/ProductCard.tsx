type ProductCardProps = {
  name: string
  description: string
  price: string
}

export default function ProductCard({ name, description, price }: ProductCardProps) {
  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="mt-2 text-indigo-600 font-bold">{price} DDAGL</p>
    </div>
  )
}
