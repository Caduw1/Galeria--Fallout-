import Card from "./Card";
import ItemCard from "./ItemCard";

function CategoriaSection({ categoria, dados }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-yellow-200 mb-4 text-center border-b border-yellow-500 pb-2">
        {categoria}
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {dados.map((item) =>
          item.categoria === "Itens" ? (
            <ItemCard key={item.id} {...item} />
          ) : (
            <Card key={item.id} {...item} />
          )
        )}
      </div>
    </div>
  );
}

export default CategoriaSection;