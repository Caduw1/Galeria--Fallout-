<<<<<<< HEAD
function Card({ nome, vida, categoria, descricao, imagem }) {
=======
function Card({ nome, vida, categoria, descricao, imagem, destaque }) {
>>>>>>> e0692b4 (react aula)
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

      {vida && (
        <p className="font-bold">HP: {vida}</p>
      )}
<<<<<<< HEAD
=======
      <p> 
         <button>Destaque</button>
         {destaque}
      </p>
>>>>>>> e0692b4 (react aula)

    </div>
  );
}

export default Card;