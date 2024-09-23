import Illustre1 from "../../assets/images/Assiette-burger-frites.png";
import Illustre2 from "../../assets/images/Burger.png";
import Illustre3 from "../../assets/images/Sauce-pimente.png";
import { Container } from "../elements/Container";
import { Heading } from "../elements/displayTitles/Heading";

export const Booking = () => {
  return (
    <Container>
      <div className="relative mb-20">
        <img
          src={Illustre1}
          alt="image burger et frites en assiete"
          className="absolute -bottom-52 -right-96"
        />
        <img
          src={Illustre2}
          alt="image burger"
          className="absolute -top-20 -left-36 z-10"
        />
        <img
          src={Illustre3}
          alt="image sauce pimanté"
          className="absolute bottom-0 left-0"
        />
        <div className="max-w-3xl mx-auto px-10 py-20">
          <Heading varient="h3" className="justify-center">
            réservation
          </Heading>
          <Heading className="justify-center my-5" theme="secondary">
            réservez votre table
          </Heading>
          <form className="grid grid-cols-2 gap-x7 gap-6 mt-20">
            <div className="">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                htmlFor="name"
                placeholder="Jhon Doe"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="jhondoe@gmail.com"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div className="">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div className="0">
              <label htmlFor="time"></label>
              <input
                type="time"
                name="time"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div className="">
              <label htmlFor="Nombre de personees"></label>
              <input
                type="text"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div className="">
              <label htmlFor="btn">btn</label>
              <button className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5">
                Reservez
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
