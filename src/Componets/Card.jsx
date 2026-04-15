function Card({ nome, vida, categoria, descricao, imagem }) {
  const isItem = categoria === "Itens";

  return (
    <div
      className={`w-[220px] p-4 rounded-lg flex flex-col items-center text-center gap-2
      transition-transform duration-200 hover:scale-105
      ${
        isItem
          ? "border border-green-400 bg-green-950 text-green-400 shadow-[0_0_10px_#00ff99]"
          : "border border-gray-600 bg-gray-900 text-gray-200"
      }`}
    >
      <img
        src={imagem}
        alt={nome}
        className="w-full h-[160px] object-contain bg-gray-800 rounded"
      />

      <h3 className="text-lg font-semibold">
        {nome}
      </h3>

      <p className="text-xs text-gray-400">
        <strong>Categoria:</strong> {categoria || "Desconhecida"}
      </p>

      <p className="text-sm">
        {descricao}
      </p>

      {!isItem && vida && (
        <p className="text-sm font-bold">
          HP: {vida}
        </p>
      )}
    </div>
  );
}

export default Card;