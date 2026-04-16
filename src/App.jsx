import { useState } from "react";
import FilterDropdown from "./Components/FilterDropdown";
import CategoriaSection from "./Components/CategoriaSection";

import Humanos from "./Dados/Humanos.jsx";
import Mutantes from "./Dados/Mutantes.jsx";
import Itens from "./Dados/Itens.jsx";

const categoriasDisponiveis = ["Humanos", "Mutantes", "Itens"];
const dados = [...Humanos, ...Mutantes, ...Itens];

function App() {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState(["Humanos"]);

  const toggleCategoria = (categoria) => {
    setCategoriasSelecionadas((prev) =>
      prev.includes(categoria)
        ? prev.filter((c) => c !== categoria)
        : [...prev, categoria]
    );
  };

  const selectAll = () => {
    setCategoriasSelecionadas([...categoriasDisponiveis]);
  };

  const textoFiltro =
    categoriasSelecionadas.length === categoriasDisponiveis.length
      ? "Todos"
      : categoriasSelecionadas.length === 1
      ? categoriasSelecionadas[0]
      : `${categoriasSelecionadas.length} selecionados`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 flex flex-col items-center">

      <h1 className="text-4xl text-yellow-100 py-6 font-bold">
        Fallout - Wasteland
      </h1>

      <FilterDropdown
        categoriasDisponiveis={categoriasDisponiveis}
        categoriasSelecionadas={categoriasSelecionadas}
        toggleCategoria={toggleCategoria}
        selectAll={selectAll}
        textoFiltro={textoFiltro}
      />

      <div className="w-full max-w-5xl flex flex-col gap-10 px-4">
        {categoriasDisponiveis
          .filter(cat => categoriasSelecionadas.includes(cat))
          .map((categoria) => {
            const itens = dados.filter(item => item.categoria === categoria);

            return (
              <CategoriaSection
                key={categoria}
                categoria={categoria}
                dados={itens}
              />
            );
          })}
      </div>

    </div>
  );
}

export default App;