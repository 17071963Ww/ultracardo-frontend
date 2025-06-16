import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5142/api/produto')
      .then(res => setProdutos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {produtos.map(produto => (
          <div key={produto.id} className="border rounded p-4 shadow">
            <img src={produto.imagemUrl} alt={produto.nome} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{produto.nome}</h2>
            <p className="text-green-700 font-bold">R$ {produto.preco.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
