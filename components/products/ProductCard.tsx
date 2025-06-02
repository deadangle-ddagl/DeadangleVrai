import { motion } from 'framer-motion'

export const ProductCard = ({ product }: { product: Product }) => (
  <motion.div 
    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    whileHover={{ y: -5 }}
  >
    <div className="p-6">
      <h3 className="text-xl font-bold text-ddagl-indigo">{product.name}</h3>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-ddagl-gold">
          {product.price} DDAGL
        </span>
        <button className="px-4 py-2 bg-ddagl-indigo text-white rounded-lg hover:bg-ddagl-gold transition-colors">
          Download
        </button>
      </div>
    </div>
  </motion.div>
)