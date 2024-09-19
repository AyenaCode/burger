import bg from "../../../assets/images/background/bg-food.jpg";
import hero from "../../../assets/images/background/burger-hero-top.png";
import { Button } from "../../elements/Button";

import { Container } from "../../elements/Container";
import { Header } from "./Header";

export const HreoTop = () => {
  return (
    <div className="bg-myprimary w-full">
      <div
        className="bg-repeat w-full h-full pb-40"
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

            <div className="bg-myred absolute rounded-full h-40 top-40 right-80 w-40 p-3 ">
              <div className="w-full h-full rounded-full text-white border-2 border-dashed flex items-center justify-center">
                <div className="text-center ">
                  <span className="text-6xl font-extrabold block">
                    5<span className="text-2xl">.49€</span>
                  </span>

                  <span className="uppercase tracking-widest text-sm">
                    seulement
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 text-mysecondary uppercase">
              <h1 className="mb-4 font-semibold">
                C'est le moment de gouter au bon gout des hangburgesr
              </h1>
              <h2 className="font-secondary textShadow">
                <span className="text-8xl block">Burger</span>
                <span className="text-6xl"> house</span>
                <span className="text-4xl ml-3">
                  Click<span className="text-myred">&</span>collect
                </span>
              </h2>
            </div>
          </div>
          <Button className="mt-5" color="mysecondary" theme="big">
            Céer mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
};
