import PropTypes from "prop-types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Product1 from "../../../assets/images/background/Product-1.jpg";
import Product2 from "../../../assets/images/background/Product-2.jpg";
import Product3 from "../../../assets/images/background/Product-3.jpg";
import "../../../styles/carousel.css";
import { Container } from "../../elements/Container";
import { Heading } from "../../elements/displayTitles/Heading";

const CardSlide = ({ children, image, title, description }) => {
  return (
    <div className="grid md:grid-cols-2 p-6">
      <div className="tracking-wide text-lg leading-relaxed text-gray-800 p-2 md:p-10 md:mb-10">
        <Heading varient="h4">{title}</Heading>
        <Heading varient="h3" theme="secondary" className="mb-5">
          {description}
        </Heading>
        {children}
      </div>
      <div className="relative h-96 md:h-full w-full">
        <img
          src={image}
          alt={`Une image pour ${title} `}
          className="absolute top-0 left-0 object-cover w-full h-full  z-0"
        />
      </div>
    </div>
  );
};

CardSlide.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const Event = () => {
  const items = [
    <CardSlide
      key="index"
      image={Product1}
      title="Burger populaire"
      description="Savourez de délicieux burger"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero possimus
      aliquam labore, modi eveniet magnam. Voluptas iusto amet nisi recusandae
      labore! Voluptas quod magnam architecto asperiores deserunt! Sequi, fugiat
      ea.
    </CardSlide>,
    <CardSlide
      key="index"
      image={Product2}
      title="test3"
      description="Découvrez le killer burger"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero possimus
      aliquam labore, modi eveniet magnam. Voluptas iusto amet nisi recusandae
      labore! Voluptas quod magnam architecto asperiores deserunt! Sequi, fugiat
      ea.
    </CardSlide>,
    <CardSlide
      key="index"
      image={Product3}
      title="test3"
      description="Le végétarien pour les amoureux du vert"
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero possimus
      aliquam labore, modi eveniet magnam. Voluptas iusto amet nisi recusandae
      labore! Voluptas quod magnam architecto asperiores deserunt! Sequi, fugiat
      ea.
    </CardSlide>,
  ];
  return (
    <Container>
      <div className="shadow-2xl mb-20">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          autoPlayInterval={4000}
          disableButtonsControls
        />
      </div>
    </Container>
  );
};
