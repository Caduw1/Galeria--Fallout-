function ItemCard({ nome, descricao, imagem }) {
  return (
    <div className="w-[220px] p-4 rounded-lg bg-green-950 text-green-400 border border-green-400 flex flex-col items-center gap-2 hover:scale-105 transition">

      <img
        src={imagem}
        alt={nome}
        className="w-full h-[140px] object-contain bg-black rounded"
      />

      <h3 className="text-lg font-bold">{nome}</h3>

      <p className="text-sm">{descricao}</p>

    </div>
  );
}

export default ItemCard;