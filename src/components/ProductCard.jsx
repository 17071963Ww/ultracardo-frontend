import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const hasOffer = product.priceoffer && product.priceoffer < product.price;

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

          {hasOffer ? (
            <div>
              <div className="flex justify-between items-center mt-1">
                <div className="flex flex-col items-start leading-tight">
                  <p className="text-gray-500 line-through text-sm">{product.price}</p>
                  <p className="text-green-800 text-base font-semibold">{product.priceoffer}</p>
                  <p className="text-xs text-gray-500 mt-1"><b>{product.buyed}</b> Já foram Comprados</p>
                </div>
                <div className="flex flex-col items-end gap-y-[2px]">
                  <span className="bg-black text-white text-[12px] px-2 py-[2px] rounded-full my-1">
                    {product.offer}% OFF
                  </span>
                  <span className="bg-black text-white text-[12px] px-2 py-[2px] rounded-full m-1">
                    ⭐ {product.star}
                  </span>                  
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mt-1 text-sm">
                <p className="text-green-800 text-base font-semibold mt-1">{product.price}</p>
                
              </div>
              <div className="flex justify-between items-center gap-x-2">
                <p className="text-xs text-gray-500 mt-1"><b>{product.buyed}</b> Já foram Comprados</p>
                <span className="bg-black text-white text-[12px] px-2 py-[2px] rounded-full m-[7px]">
                  ⭐ {product.star}
                </span>                  
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </Link>
  );
}
