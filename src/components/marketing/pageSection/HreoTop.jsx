import bg from "../../../assets/images/background/bg-food.jpg";
import hero from "../../../assets/images/background/burger-hero-top.png";

import { Container } from "../../elements/Container";
import { Header } from "./Header";

export const HreoTop = () => {
  return (
    <div className="bg-myprimary w-full h-screen">
      <div
        className="bg-repeat w-full h-full"
        style={{ background: `url(${bg})` }}
      >
        <Container>
          <Header />
          <div className="w-full flex items-center">
            <div className="w-full text-mysecondary text-xl 2/3 uppercase">
              <h1 className=" ">
                C'est le moment de gouter au bon gout des hangburgesr
              </h1>
              <h2 className="font-secondary ">
                <span className="text-8xl block ">Burger</span>
                <span className="text-6xl"> house</span>
                <span className="text-4xl ml-3">Click&collect</span>
              </h2>
            </div>
            <div className="w-1/3">
              <img
                src={hero}
                alt="un menu buregr avec frites et coca-cola"
                className=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
