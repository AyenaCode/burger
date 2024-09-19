import Last1 from "../../../assets/images/background/LastProducts-1.jpg";
import Last2 from "../../../assets/images/background/LastProducts-2.jpg";
import Last3 from "../../../assets/images/background/LastProducts-3.jpg";
import { Card } from "../../elements/Card";
import { Container } from "../../elements/Container";

export const LastProduct = () => {
  return (
    <Container>
      <div className="w-full h-96 px-11 my-20 grid grid-cols-2 grid-rows-2 gap-9">
        <Card
          className="row-span-2"
          title1="Killer burger"
          title2="Burger le plus populaire"
          image={Last1}
        />
        <Card
          title1="Island Burger"
          title2="Plus de plaisir"
          title3="pluse de goût"
          image={Last2}
        />
        <Card
          title1="Orlanod's burger"
          title2=" Frais & piementé"
          image={Last3}
        />
      </div>
    </Container>
  );
};
