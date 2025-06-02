// Product list pageimport { ProductGrid } from '@/components/products/ProductGrid'
import { prisma } from '@/lib/db'

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-ddagl-indigo">
        Marketplace Digital
      </h1>
      <ProductGrid products={products} />
    </div>
  )
}
