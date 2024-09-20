import { Container } from "../../elements/Container";
import { Heading } from "../../elements/displayTitles/Heading";
import { HeadingTittle } from "../../elements/displayTitles/HeadingTittle";

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
    </Container>
  );
};
