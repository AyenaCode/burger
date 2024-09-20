import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Product1 from "../../../assets/images/background/Product-1.jpg";
import "../../../styles/carousel.css";
import { Container } from "../../elements/Container";

export const Event = () => {
  const handleDragStart = (e) => e.preventDefault();
  let index;

  const items = [
    <img src={Product1} onDragStart={handleDragStart} key={index} />,
    <img src={Product1} onDragStart={handleDragStart} key={index} />,
    <img src={Product1} onDragStart={handleDragStart} key={index} />,
  ];
  return (
    <Container>
      <div className="shadow-2xl h-96 w-full mb-20">
        <AliceCarousel
          mouseTracking
          items={items}
          // autoPlay
          // infinite
          // autoPlayInterval={4000}
          disableButtonsControls
        />
      </div>
    </Container>
  );
};
