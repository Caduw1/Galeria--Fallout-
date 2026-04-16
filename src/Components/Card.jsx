function Card({ nome, vida, categoria, descricao, imagem }) {
  return (
    <div className="w-[220px] p-4 rounded-lg bg-gray-900 text-gray-200 border border-gray-600 flex flex-col items-center gap-2 hover:scale-105 transition">

      <img
        src={imagem}
        alt={nome}
        className="w-full h-[140px] object-contain bg-gray-800 rounded"
      />

      <h3 className="text-lg font-bold">{nome}</h3>

      <p className="text-sm text-gray-400">{categoria}</p>

      <p className="text-sm">{descricao}</p>

      <p className="font-bold">HP: {vida}</p>

    </div>
  );
}

export default Card;