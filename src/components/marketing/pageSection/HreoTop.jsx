import bg from "../../../assets/images/background/bg-food.jpg";
import Logo from "../../../assets/images/svg/Logo-burger-house.svg";
import { Container } from "../../elements/Container";

export const HreoTop = () => {
  return (
    <div className="bg-myprimary w-full h-screen">
      <div
        className="bg-repeat w-full h-full"
        style={{ background: `url(${bg})` }}
      >
        <Container>
          <img src={Logo} alt="Burger logo" />
        </Container>
      </div>
    </div>
  );
};
