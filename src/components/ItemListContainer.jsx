import data from "../data.json";
import ItemList from "./ItemList";
import Card_Car from "./Card_Car";

const ItemListContainer = () => {

  //Si no estan los productos, aparece el loading
  // function render() {
  //   if (isLoading) {
  //     return <Loading />;
  //   } else if (subcategory) {
  //     return <ItemList/>;
  //   } else {
  //     return category ? (
  //       <ItemList />
  //     ) : (
  //       <ItemList/>
  //     );
  //   }
  // }

  return (
    <>
      <div className="catalogue">
        <ItemList data={data}/>
        <Card_Car/>
      </div>
    </>
  )
}

export default ItemListContainer