function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-96">
      <input
        type="text"
        placeholder="Buscar por nome (ex: Deathclaw, Piper...)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-5 py-3 bg-gray-900 border border-yellow-600 rounded-lg 
                   text-yellow-100 placeholder-gray-400 focus:outline-none 
                   focus:border-yellow-400 shadow-lg"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-500">🔎</span>
    </div>
  );
}

export default SearchBar;