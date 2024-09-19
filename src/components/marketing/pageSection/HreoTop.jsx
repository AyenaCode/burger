import bg from "../../../assets/images/background/bg-food.jpg";

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
        </Container>
      </div>
    </div>
  );
};
