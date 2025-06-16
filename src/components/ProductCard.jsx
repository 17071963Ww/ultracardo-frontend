import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700">{product.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}
