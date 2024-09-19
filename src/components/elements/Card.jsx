import PropTypes from "prop-types";

export const Card = ({ className, title1, title2, title3, image }) => {
  return (
    <div className={`${className} relative bg-myprimary h-full uppercase p-7`}>
      <img
        className="absolute top-0 left-0 rounded h-full w-full object-cover"
        src={image}
        alt={`ìmage ${title1}`}
      />
      <div className="text-white z-10 relative">
        <span className="block text-lg font-bold">{title1} </span>
        <span className="block text-2xl font-black"> {title2} </span>
        <span className="block text-2xl font-black"> {title3} </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string,
  title3: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
};
