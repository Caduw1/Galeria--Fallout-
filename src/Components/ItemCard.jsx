function ItemCard({ nome, descricao, imagem }) {
  return (
    <div className="w-[220px] p-4 rounded-lg flex flex-col items-center text-center gap-2
      border border-green-400 bg-green-950 text-green-400 shadow-[0_0_10px_#00ff99]
      transition-transform duration-200 hover:scale-105"
    >
      <img
        src={imagem}
        alt={nome}
        className="w-full h-[140px] object-contain bg-black rounded"
      />

      <h3 className="text-lg font-semibold">
        {nome}
      </h3>

      <p className="text-sm">
        {descricao}
      </p>
    </div>
  );
}

export default ItemCard;