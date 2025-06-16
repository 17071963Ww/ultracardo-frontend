import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ProductCard from './components/ProductCard.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import Divisor from './components/Divisor.jsx';
import { AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'Tênis Nike Revolution 6',     price: 'R$ 299,90',   image: '/assets/products/Tênis Nike Revolution 6.jpg'},
  { id: 2, name: 'Jaqueta Jeans Levis',         price: 'R$ 419,00',   image: '/assets/products/Jaqueta Jeans Levis.jpg' },
  { id: 3, name: 'Fone de Ouvido Bose QuietComfort', price: 'R$ 1.299,00', image: '/assets/products/Fone de Ouvido Bose QuietComfort.jpg' },
  { id: 4, name: 'Smart TV Samsung 55"',        price: 'R$ 2.499,00', image: '/assets/products/Smart TV Samsung 55.jpg' },
  { id: 5, name: 'Câmera DSLR Canon EOS',       price: 'R$ 3.799,00', image: '/assets/products/Câmera DSLR Canon EOS.jpg' },
  { id: 6, name: 'Relógio Garmin Forerunner',   price: 'R$ 1.199,00', image: '/assets/products/Relógio Garmin Forerunner.jpg'},
  { id: 7, name: 'Notebook Dell Inspiron',      price: 'R$ 4.299,00', image: '/assets/products/Notebook Dell Inspiron.jpg'},
  { id: 8, name: 'Mochila Swissgear',           price: 'R$ 349,00',   image: '/assets/products/Mochila Swissgear.jpg'},
  { id: 9, name: 'Óculos Ray-Ban Aviador',      price: 'R$ 699,00',   image: '/assets/products/Óculos Ray-Ban Aviador.jpg'},
  { id: 10, name: 'Bicicleta Caloi Elite',      price: 'R$ 2.999,00', image: '/assets/products/Bicicleta Caloi Elite.jpg'},
  { id: 11, name: 'Cafeteira Nespresso',        price: 'R$ 599,00',   image: '/assets/products/Cafeteira Nespresso.jpg'},
  { id: 12, name: 'Livro O Hobbit',             price: 'R$ 49,90',    image: '/assets/products/Livro O Hobbit.jpg' },
  { id: 13, name: 'Mouse Logitech MX Master 3', price: 'R$ 399,00',   image: '/assets/products/Mouse Logitech MX Master 3.jpg' },
  { id: 14, name: 'Teclado Mecânico Redragon',  price: 'R$ 299,00',   image: '/assets/products/Teclado Mecânico Redragon.jpg' },
  { id: 15, name: 'Monitor LG UltraWide',       price: 'R$ 1.499,00', image: '/assets/products/Monitor LG UltraWide.jpg' },
  { id: 16, name: 'Echo Dot 4ª Geração',        price: 'R$ 349,00',   image: '/assets/products/Echo Dot 4ª Geração.jpg' },
  { id: 17, name: 'Patins Rollerblade',         price: 'R$ 799,00',   image: '/assets/products/Patins Rollerblade.jpg' },
  { id: 18, name: 'Camiseta Adidas Originals',  price: 'R$ 129,90',   image: '/assets/products/Camiseta Adidas Originals.jpg' },
  { id: 19, name: 'Chuteira Nike Mercurial',    price: 'R$ 499,00',   image: '/assets/products/Chuteira Nike Mercurial.jpg' },
  { id: 20, name: 'Tablet Samsung Galaxy Tab',  price: 'R$ 1.299,00', image: '/assets/products/Tablet Samsung Galaxy Tab.jpg' },
  { id: 21, name: 'Aspirador Robô Xiaomi',      price: 'R$ 1.099,00', image: '/assets/products/Aspirador Robô Xiaomi.jpg' },
  { id: 22, name: 'Cadeira Gamer ThunderX3',    price: 'R$ 1.399,00', image: '/assets/products/Cadeira Gamer ThunderX3.jpg' },
  { id: 23, name: 'Batedeira Planetária Arno',  price: 'R$ 499,00',   image: '/assets/products/Batedeira Planetária Arno.jpg' },
  { id: 24, name: 'Tênis Adidas Ultraboost',    price: 'R$ 799,00',   image: '/assets/products/Tênis Adidas Ultraboost.jpg' },
];


export default function App() {
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 20;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Divisor />

      <section className="container mx-auto px-4 py-6" name="products">
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.length > 0 ? (
            <AnimatePresence mode="wait">
              {paginatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          ) : (
            <p className="text-center col-span-full text-gray-400 text-lg">
              Nenhum produto encontrado.
            </p>
          )}
        </div>

        {filteredProducts.length > itemsPerPage && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(pageCount)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => setPage(index + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border text-sm font-medium transition ${
                      page === index + 1 ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                    >
                    {index + 1}                                
                </button>
            ))}            
          </div>
        )}
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
