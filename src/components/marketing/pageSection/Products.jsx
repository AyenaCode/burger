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
    </Container>
  );
};
