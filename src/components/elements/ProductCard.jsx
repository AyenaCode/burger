import PropTypes from "prop-types";
import { Button } from "./Button";

export const ProductCard = ({ image, children, description }) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <img src={image} alt="Burger" className="w-full h-full object-cover" />

      {children}
      <p className="text-center"> {description} </p>
      <Button className="font-secondary" color="danger">
        Commendez
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};
