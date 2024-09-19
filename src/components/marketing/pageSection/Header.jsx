import Logo from "../../../assets/images/svg/Logo-burger-house.svg";
import icon from "../../../assets/images/svg/ico-bag-clickAndCollect.svg";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-10">
      <div className="w-full">
        <img src={Logo} alt="Burger logo" className="w-64" />
      </div>
      <div className="w-full text-mysecondary flex items-center justify-end">
        <img src={icon} alt="icon de shop" className="w-5 mr-1" />
        <span> Commendez votre repas en ligne</span>
      </div>
    </div>
  );
};
