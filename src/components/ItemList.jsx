import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <>
      {data?.map((dato) => (
        <Item
          key={dato.id}
          title={dato.titulo}
          descripcion={dato.descripcion}
          img={dato.img}
          link={dato.link}
          price={dato.precio}
          sold={dato.vendido}
        />
      ))}
    </>
  );
};

export default ItemList;
