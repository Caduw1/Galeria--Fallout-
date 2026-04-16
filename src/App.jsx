import { useState, useRef, useEffect } from "react";
import Card from './Components/Card.jsx';
import ItemCard from './Components/ItemCard.jsx';
import Humanos from './Dados/Humanos.jsx';
import Mutantes from './Dados/Mutantes.jsx';
import Itens from "./Dados/Itens.jsx";

const categoriasDisponiveis = ["Humanos", "Mutantes", "Itens"];
const dados = [...Humanos, ...Mutantes, ...Itens];

function App() {
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState(["Humanos"]);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef(null);

  const isAllSelected = categoriasDisponiveis.every(cat => 
    categoriasSelecionadas.includes(cat)
  );

  const dadosFiltrados = dados.filter((item) =>
    categoriasSelecionadas.includes(item.categoria)
  );

  const toggleCategoria = (categoria) => {
    setCategoriasSelecionadas(prev => {
      if (prev.includes(categoria)) {
        // Não permite ficar sem nenhuma seleção
        if (prev.length === 1) return prev;
        return prev.filter(cat => cat !== categoria);
      } else {
        return [...prev, categoria];
      }
    });
  };

  const selectAll = () => {
    setCategoriasSelecionadas([...categoriasDisponiveis]);
    setDropdownAberto(false);
  };

  const toggleDropdown = () => setDropdownAberto(!dropdownAberto);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownAberto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Texto exibido no dropdown
  const textoFiltro = categoriasSelecionadas.length === categoriasDisponiveis.length
    ? "Todos"
    : categoriasSelecionadas.length === 1
    ? categoriasSelecionadas[0]
    : `${categoriasSelecionadas.length} selecionados`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 relative">
      <div className="absolute inset-0 bg-green-950/30"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center py-6 text-yellow-100 drop-shadow-lg">
          Fallout - Wasteland
        </h1>

        {/* Dropdown Multi-Seleção Adaptado */}
        <div className="flex justify-center mb-8" ref={dropdownRef}>
          <div className="relative w-64">
            <button
              onClick={toggleDropdown}
              className="w-full px-4 py-3 bg-yellow-800 hover:bg-yellow-700 text-yellow-100 font-semibold rounded-lg shadow-lg flex items-center justify-between border border-yellow-600 transition-all"
            >
              <span>{textoFiltro}</span>
              <span className="text-xl">▼</span>
            </button>

            {dropdownAberto && (
              <div className="absolute mt-2 w-full bg-gray-900 border border-yellow-600 rounded-lg shadow-2xl overflow-hidden z-50">
                <div className="p-2">
                  <button
                    onClick={selectAll}
                    className={`w-full text-left px-4 py-2 rounded hover:bg-green-900 text-green-400 font-medium mb-1
                      ${isAllSelected ? "bg-green-950" : ""}`}
                  >
                    Todos
                  </button>

                  {categoriasDisponiveis.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-green-900 rounded cursor-pointer text-gray-200"
                    >
                      <input
                        type="checkbox"
                        checked={categoriasSelecionadas.includes(cat)}
                        onChange={() => toggleCategoria(cat)}
                        className="w-4 h-4 accent-yellow-500"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="p-5 flex flex-wrap gap-6 justify-center">
          {dadosFiltrados.length > 0 ? (
            dadosFiltrados.map((item) =>
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
            )
          ) : (
            <p className="text-yellow-100 text-xl mt-10">Nenhum item encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

///// dddd