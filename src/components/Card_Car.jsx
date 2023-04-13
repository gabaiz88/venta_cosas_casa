import Card from 'react-bootstrap/Card';
import auto from "../assets/IMG_0861.jpg"

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={auto} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title id="card_car_title">FORD FIESTA 1.6 SE - 2017 - 41 mil kms</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;