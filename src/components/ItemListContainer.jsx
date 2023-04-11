import data from "../data.json";
import ItemList from "./ItemList";

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
      </div>
    </>
  )
}

export default ItemListContainer