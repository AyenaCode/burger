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
          <div className="w-full relative mt-28">
            <img
              src={hero}
              alt="un menu buregr avec frites et coca-cola"
              className="absolute -top-64 right-0 w-1/2 z-0"
            />
            <div className="relative z-10 text-mysecondary uppercase">
              <h1 className="mb-4 font-semibold">
                C'est le moment de gouter au bon gout des hangburgesr
              </h1>
              <h2 className="font-secondary ">
                <span className="text-8xl block">Burger</span>
                <span className="text-6xl"> house</span>
                <span className="text-4xl ml-3">
                  Click<span className="text-myred">&</span>collect
                </span>
              </h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
