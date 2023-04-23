import data from "../data.json";
import ItemList from "./ItemList";
import TituloPagina from "./TituloPagina";

const ItemListContainer = () => {
  return (
    <>
      <div className="catalogue">
        <TituloPagina />
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
