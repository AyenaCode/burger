import PropTypes from "prop-types";
import Product1 from "../../../assets/images/background/Product-1.jpg";
import Product2 from "../../../assets/images/background/Product-2.jpg";
import Product3 from "../../../assets/images/background/Product-3.jpg";
import { Button } from "../../elements/Button";
import { Container } from "../../elements/Container";
import { Heading } from "../../elements/displayTitles/Heading";
import { HeadingTittle } from "../../elements/displayTitles/HeadingTittle";

export const Products = () => {
  return (
    <Container>
      <HeadingTittle varient="h3">
        toujours des délicieux burgeurs
      </HeadingTittle>
      <Heading theme="secondary" className="justify-center my-5">
        Choisisez et réservez
      </Heading>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        ducimus consectetur ratione voluptatibus quis voluptas perferendis,
        ullam odit iste dolor magnam delectus distinctio officia. Velit mollitia
        illum voluptatem natus sapiente.
      </p>
      <div className="grid grid-cols-3 gap-x-1 mt-10 mb-20">
        <ProductsCard image={Product1} />
        <ProductsCard image={Product2} />
        <ProductsCard image={Product3} />
      </div>
    </Container>
  );
};

function ProductsCard({ image }) {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-72">
        <img
          src={image}
          alt="Un burgeur"
          className="bg-myprimary absolute top-0 left-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center px-5 pb-5">
        <Heading className="font-bold my-5" varient="h3">
          Lorem ipsum dollar
        </Heading>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore
          commodi repellat.
        </p>
        <Button color="danger" className="font-secondary">
          Commender
        </Button>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  image: PropTypes.string,
};
