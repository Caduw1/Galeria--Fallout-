import { useState } from "react";
import Card from './Componets/Card.jsx';
import ItemCard from './Componets/ItemCard.jsx';
import Humanos from './Componets/Humanos.jsx';
import Mutantes from './Componets/Mutantes.jsx';
import Itens from "./Componets/Itens.jsx";

const categorias = ["Humanos", "Mutantes", "Itens"];
const dados = [...Humanos, ...Mutantes, ...Itens];

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Humanos");

  const dadosFiltrados = dados.filter(
    (item) => item.categoria === categoriaSelecionada
  );

  return (
   <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 relative">
  <div className="absolute inset-0 bg-green-950/30"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center py-6 text-yellow-100 drop-shadow-lg">
          Fallout - Wasteland
        </h1>

        <div className="flex justify-center mb-6">
          <select
            className="px-4 py-2 rounded-lg bg-yellow-800 text-yellow-100 font-semibold shadow-lg"
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="p-5 flex flex-wrap gap-6 justify-center">
          {dadosFiltrados.map((item) =>
            item.categoria === "Itens" ? (
              <ItemCard
                key={item.id}
                nome={item.nome}
                descricao={item.descricao}
                imagem={item.imagem}
              />
            ) : (
              <Card
                key={item.id}
                nome={item.nome}
                vida={item.vida}
                categoria={item.categoria}
                descricao={item.descricao}
                imagem={item.imagem}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;