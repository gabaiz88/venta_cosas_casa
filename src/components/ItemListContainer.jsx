import data from "../data.json";
import ItemList from "./ItemList";
import Card_Car from "./Card_Car";
import TituloPagina from "./TituloPagina";

const ItemListContainer = () => {
  return (
    <>
      <div className="catalogue">
        <TituloPagina />
        <Card_Car />
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
