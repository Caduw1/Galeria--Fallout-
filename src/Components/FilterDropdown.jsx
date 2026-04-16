import { useState, useRef, useEffect } from "react";

function FilterDropdown({
  categoriasDisponiveis,
  categoriasSelecionadas,
  toggleCategoria,
  selectAll,
  textoFiltro
}) {
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownAberto(!dropdownAberto);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownAberto(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center mb-8" ref={dropdownRef}>
      <div className="relative w-64">

        <button
          onClick={toggleDropdown}
          className="w-full px-4 py-3 bg-yellow-800 text-yellow-100 rounded-lg flex justify-between"
        >
          {textoFiltro} ▼
        </button>

        {dropdownAberto && (
          <div className="absolute mt-2 w-full bg-gray-900 border border-yellow-600 rounded-lg shadow-lg">

            <button
              onClick={selectAll}
              className="w-full text-left px-4 py-2 text-green-400 hover:bg-green-900"
            >
              Todos
            </button>

            {categoriasDisponiveis.map((cat) => (
              <label key={cat} className="flex gap-2 px-4 py-2 text-gray-200 hover:bg-green-900">
                <input
                  type="checkbox"
                  checked={categoriasSelecionadas.includes(cat)}
                  onChange={() => toggleCategoria(cat)}
                />
                {cat}
              </label>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

export default FilterDropdown;