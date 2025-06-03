import ProductCard from './ProductCard'

const products = [
  { name: 'Objet inutile #1', description: 'Un truc marrant', price: '12' },
  { name: 'Objet absurde #2', description: 'Absolument pas utile', price: '20' },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  )
}
