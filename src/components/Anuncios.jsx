import { useEffect, useState } from "react";

export default function Anuncios() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5142/api/Produto")
      .then(res => res.json())
      .then(setProdutos)
      .catch(setErro);
  }, []);

  if (erro) {
    return <p className="text-red-500">Erro ao carregar anúncios.</p>;
  }

  if (produtos.length === 0) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {produtos.map(prod => (
        <div key={prod.id} className="bg-white rounded-lg shadow p-4">
          <img src={prod.imagemUrl} alt={prod.nome} className="h-40 w-full object-cover rounded" />
          <h3 className="text-xl font-semibold mt-4">{prod.nome}</h3>
          <p className="text-gray-600">{prod.descricao}</p>
          <p className="font-bold text-indigo-600 mt-2">R$ {prod.preco?.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
