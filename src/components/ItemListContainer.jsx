import data from "../data.json";
import ItemList from "./ItemList";
import Card_Car from "./Card_Car";

const ItemListContainer = () => {

  return (
    <>
      <div className="catalogue">
        <Card_Car/>
        <ItemList data={data}/>
      </div>
    </>
  )
}

export default ItemListContainer