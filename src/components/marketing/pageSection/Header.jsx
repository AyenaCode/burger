import icon from "../../../assets/images/svg/ico-bag-clickAndCollect.svg";
import Logo from "../../../assets/images/svg/Logo-burger-house.svg";
import LogoResponseive from "../../../assets/images/svg/picto-burger-house.svg";
import { Button } from "../../elements/Button";

export const Header = () => {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="w-full">
        <img src={Logo} alt="Burger logo" className="w-64 hidden md:block" />
        <img
          src={LogoResponseive}
          alt="Burger logo"
          className="w-16 md:hidden"
        />
      </div>
      <div className="w-full text-mysecondary ">
        <div className="items-center justify-end hidden md:flex">
          <img src={icon} alt="icon de shop" className="w-5 mr-1" />
          <span>Commendez votre repas en ligne</span>
        </div>
        <div className="flex items-center justify-end md:mt-5">
          <Button className="mr-3 tracking-widest">inscription</Button>
          <Button className="tracking-widest" color="mysecondary">
            Connection
          </Button>
        </div>
      </div>
    </div>
  );
};
