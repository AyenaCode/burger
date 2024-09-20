import Product1 from "../../../assets/images/background/Product-1.jpg";
import Product2 from "../../../assets/images/background/Product-2.jpg";
import Product3 from "../../../assets/images/background/Product-3.jpg";
import { Container } from "../../elements/Container";
import { Heading } from "../../elements/displayTitles/Heading";
import { HeadingTittle } from "../../elements/displayTitles/HeadingTittle";
import { ProductCard } from "../../elements/ProductCard";

export const Products = () => {
  return (
    <Container>
      <HeadingTittle varient="h3">
        toujours des délicieux burgeurs
      </HeadingTittle>
      <Heading theme="secondary">Choisisez et réservez</Heading>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        ducimus consectetur ratione voluptatibus quis voluptas perferendis,
        ullam odit iste dolor magnam delectus distinctio officia. Velit mollitia
        illum voluptatem natus sapiente.
      </p>
      <div className="w-full flex items-center justify-center gap-x-1 mb-5">
        <ProductCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eius?"
          image={Product1}
        >
          <Heading varient="h3" display="secondary">
            Lorem ipsum dollar
          </Heading>
        </ProductCard>
        <ProductCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eius?"
          image={Product2}
        >
          <Heading varient="h3" display="secondary">
            Lorem ipsum dollar
          </Heading>
        </ProductCard>
        <ProductCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eius?"
          image={Product3}
        >
          <Heading varient="h3" display="secondary">
            Lorem ipsum dollar
          </Heading>
        </ProductCard>
      </div>
    </Container>
  );
};
