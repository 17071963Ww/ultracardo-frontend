import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from "react";                                   
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product = products.find(p => p.id === Number(id));

 

  if (!product) {
    return (
      <div className="container mx-auto py-10 px-4 text-center text-white">
        <p className="text-xl">Produto não encontrado.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      </div>
    );
  }

  const recommended = products
    .filter(p => p.id !== product.id)
    .slice(0, 5);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-gray-800 rounded hover:bg-gray-700 transition text-sm"
        >
          ← Voltar
        </button>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start gap-10 px-6 py-10">
        <div className="flex flex-col items-center w-full md:w-auto">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-md w-full rounded-xl shadow-2xl object-cover"
          />

          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Outros produtos recomendados</h2>
            <div className="grid grid-cols-1 gap-4">
              {recommended.map(item => (
                <div key={item.id} className="flex gap-4 bg-gray-900 p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-blue-400 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold">{product.name}</h1>
          <p className="text-2xl text-blue-400 font-bold">{product.price}</p>

          <ul className="space-y-2 text-gray-300">
            <li>✅ Qualidade garantida</li>
            <li>🚚 Envio rápido para todo Brasil</li>
            <li>🔒 Compra 100% segura</li>
            <li>📦 Devolução grátis em até 7 dias</li>
          </ul>

          <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-3">Fretes disponíveis</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>PAC - R$ 20,00 (5 a 8 dias úteis)</li>
              <li>SEDEX - R$ 40,00 (2 a 4 dias úteis)</li>
              <li>Retirada na loja - Grátis</li>
            </ul>
          </div>

          <p className="text-gray-400">
            Este produto é ideal para quem busca qualidade, design moderno e ótimo custo-benefício. Fabricado com materiais premium, é a escolha perfeita para seu dia a dia.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-700 transition">
              Comprar Agora
            </button>
            <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition">
              Adicionar ao Carrinho
            </button>
          </div>

          <div className="mt-10 border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold mb-4">Comentários</h3>

            <div className="space-y-6 max-h-64 overflow-y-auto">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300"><strong>João:</strong> Produto excelente, recomendo!</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300"><strong>Ana:</strong> Entrega rápida e qualidade top.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300"><strong>Carlos:</strong> Cumpre o que promete, muito bom.</p>
              </div>
            </div>

            <form className="mt-6 flex flex-col gap-3">
              <textarea
                className="bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none"
                rows={3}
                placeholder="Deixe seu comentário (simulado)"
                disabled
              />
              <button 
                type="button"
                className="bg-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-700 transition cursor-not-allowed"
                disabled
              >
                Enviar Comentário
              </button>
            </form>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-gray-500">
            Produto código #{product.id} | Estoque disponível | Garantia de 12 meses
          </div>
        </div>
      </div>
    </div>
  );
}
