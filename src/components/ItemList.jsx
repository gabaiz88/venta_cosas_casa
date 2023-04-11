import Item from "./Item"

const ItemList = ({data}) => {
  
  return (
    <>
        {data?.map((dato) => (
          <Item
            key={dato.id}
            titulo={dato.titulo}
            descripcion={dato.descripcion}
            img={dato.img}
            link={dato.link}
          />
        ))}
    </>
  )
}

export default ItemList