import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMail, HiOutlineLocationMarker } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import BgImage from "../../../assets/images/background/bg-footer.jpg";
import Logo from "../../../assets/images/svg/Logo-burger-house-white.svg";
import { Container } from "../../elements/Container";

export const Footer = () => {
  return (
    <Container>
      <div className="text-white relative lg:mb-20">
        <img
          src={BgImage}
          alt="un plan de travail de cuisine ou l'on conçoit un humburger"
          className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="h-full w-full z-10 relative md:flex">
          <div className="h-full w-full p-10 md:mb-20">
            <img src={Logo} alt="Burger" className="md:my-10 my-2 w-2/3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              possimus delectus explicabo velit pariatur obcaecati aliquam.
              Aspernatur dicta voluptas odit, est, corrupti mollitia minima
              maiores magnam, quibusdam cupiditate porro amet saepe non? Autem
              ullam soluta dicta quo doloremque atque nobis?
            </p>
          </div>

          <div className="w-full flex flex-col justify-center font-extrabold text-lg">
            <div className="flex items-center pl-14 lg:pl-40">
              <HiOutlineLocationMarker className="mr-2 w-10 h-10" />
              <span className="uppercase tracking-tighter">
                15 place belleconlioin, 6900 lyon
              </span>
            </div>
            <div className="flex items-center pl-14 lg:pl-40">
              <HiMail className="mr-2 w-10 h-10" />
              <span className="tracking-tighter">info@burgerhouse.com</span>
            </div>
          </div>
        </div>
        <div className="p-5 z-10 relative flex items-center justify-between">
          <p className="text-gray-300">
            &copy; burger house 2024 all rights reserved
          </p>
          <div className="flex text-black">
            <a href="https//:instagram.com" className=" rounded-full mr-2">
              <FaInstagram className="h-7 w-7 bg-white hover:bg-myprimaryHover animate p-1 rounded-full" />
            </a>
            <a href="https//:instagram.com" className="rounded-full mr-2 ">
              <FaFacebookF className="h-7 w-7 bg-white  hover:bg-myprimaryHover animate p-1 rounded-full" />
            </a>
            <a href="https//:instagram.com" className=" rounded-full  mr-2 ">
              <FaTwitter className="h-7 w-7 bg-white  hover:bg-myprimaryHover animate p-1 rounded-full" />
            </a>
            <a href="https//:instagram.com" className="rounded-full ">
              <IoLogoWhatsapp className="h-7 w-7 bg-white hover:bg-myprimaryHover animate p-1 rounded-full"></IoLogoWhatsapp>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
