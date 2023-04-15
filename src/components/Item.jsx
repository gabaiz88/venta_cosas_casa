import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import format from "../functions/price_format";


const Item = ({ title, descripcion, img, link, price }) => {

  // function tachado(price) {
  //   if (title != "Mesa") {
  //     return <span id="tachado">{price}</span>
  //   }
  // }

  return (
    <div className="item">
      <Card style={{ width: "20em", height: "670px" }}>
        <Card.Img id="image_card" variant="top" src={img} />
        <Card.Body className="card_body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <h4 className="card_price">{format(price)}.-</h4>
          {/* {tachado(price)} */}
          <a href={link} target="blank">
            <Button variant="primary">Más Fotos..</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
