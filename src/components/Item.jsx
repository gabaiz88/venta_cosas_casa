import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";

const Item = ({ titulo, descripcion, img, link }) => {
  console.log(titulo, descripcion);
  return (
    <div className='item'>
      <Card style={{ width: "20em", height:"630px" }}>
        <Card.Img id="image_card" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <a href={link} target="blank"><Button variant="primary">Más Fotos..</Button></a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
