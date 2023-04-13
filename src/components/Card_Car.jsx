
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item className='item_car'>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ventacosascasa-6149d.appspot.com/o/Fiesta%2FIMG_0861.jpg?alt=media&token=bd5f45e1-0f4f-4d45-b253-e774b85844be"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='black_letters'>FORD FIESTA 1.6 SE - 2017 - 41 MIL KMS</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item_car'>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ventacosascasa-6149d.appspot.com/o/Fiesta%2FIMG_0862.jpg?alt=media&token=6d325870-e098-401c-9783-1a15f50d3780"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item_car'>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ventacosascasa-6149d.appspot.com/o/Fiesta%2FIMG_0860.jpg?alt=media&token=4496d81b-f75d-4a3e-988a-84a099e512d6"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item_car'>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/ventacosascasa-6149d.appspot.com/o/Fiesta%2FIMG_0863.jpg?alt=media&token=22144c1f-3f3d-4480-b55f-2c253b0244fb"
          alt="Four slide"
        />
        <Carousel.Caption>
          {/* <h2 className='black_letters'>FORD FIESTA 1.6 SE - 2017 - 41 MIL KMS</h2> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;