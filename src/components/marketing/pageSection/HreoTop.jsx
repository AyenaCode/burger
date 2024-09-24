import bg from "../../../assets/images/background/bg-food.jpg";
import hero from "../../../assets/images/background/burger-hero-top.png";
import { Button } from "../../elements/Button";

import { Container } from "../../elements/Container";
import { Header } from "./Header";

export const HreoTop = () => {
  return (
    <div className="bg-myprimary w-full">
      <div
        className="bg-repeat w-full h-full pb-20 md:pb-60"
        style={{ background: `url(${bg})` }}
      >
        <Container>
          <Header />
          <div className="w-full relative md:my-5 lg:mt-28">
            <img
              src={hero}
              alt="un menu buregr avec frites et coca-cola"
              className="hidden md:block absolute lg:-top-64 -top-64 md:-top-20 right-0 md:-right-20 z-0"
              style={{ width: "576px" }}
            />

            <div className="bg-myred hidden md:block absolute rounded-full h-40 md:top-60 top-40 right-80 w-40 p-3">
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

            <div className="relative z-10 text-mysecondary uppercase md:text-left sm:text-center">
              <h1 className="mb-4 font-semibold">
                C'est le moment de gouter au bon gout des hangburgesr
              </h1>
              <h2 className="font-secondary textShadow">
                <span className="lg:text-8xl text-7xl block">Burger</span>
                <span className="lg:text-6xl text-5xl block sm:inline-block">
                  house
                </span>
                <span className="text-4xl sm:ml-3">
                  Click<span className="text-myred">&</span>collect
                </span>
              </h2>
            </div>
          </div>
          <Button
            className="mt-5 sm:block mx-auto w-2/3 md:mx-0 md:w-60"
            color="mysecondary"
            theme="big"
          >
            Céer mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
};
