import { useState, useRef, useEffect } from "react";

function FilterDropdown({
  categoriasDisponiveis,
  categoriasSelecionadas,
  toggleCategoria,
  selectAll,
  textoFiltro
}) {
  const [aberto, setAberto] = useState(false);
  const dropdownRef = useRef(null);

  // abre ou fecha o dropdown
  const alternarDropdown = () => setAberto((prev) => !prev);

  // fecha o dropdown ao clicar fora dele
  useEffect(() => {
    const fecharAoClicarFora = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAberto(false);
      }
    };

    document.addEventListener("mousedown", fecharAoClicarFora);
    return () => document.removeEventListener("mousedown", fecharAoClicarFora);
  }, []);

  return (
    <div className="flex justify-center mb-8" ref={dropdownRef}>
      <div className="relative w-64">

        {/* botão principal do filtro */}
        <button
          onClick={alternarDropdown}
          className="w-full px-4 py-3 bg-yellow-800 text-yellow-100 rounded-lg flex justify-between items-center"
        >
          <span>{textoFiltro}</span>
          <span>▼</span>
        </button>

        {/* conteúdo do dropdown */}
        {aberto && (
          <div className="absolute mt-2 w-full bg-gray-900 border border-yellow-600 rounded-lg shadow-lg overflow-hidden">

            {/* botão para selecionar todas as categorias */}
            <button
              onClick={selectAll}
              className="w-full text-left px-4 py-2 text-green-400 hover:bg-green-900"
            >
              selecionar todos
            </button>

            {/* lista de categorias */}
            <ul>
              {categoriasDisponiveis.map((categoria) => (
                <li key={categoria}>
                  <label className="flex items-center gap-2 px-4 py-2 text-gray-200 hover:bg-green-900 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={categoriasSelecionadas.includes(categoria)}
                      onChange={() => toggleCategoria(categoria)}
                    />
                    {categoria}
                  </label>
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;