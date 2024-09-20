import PropTypes from "prop-types";

export const Heading = ({ children, varient, theme, display }) => {
  const defaultClass = "mt-5 uppercase";
  let font, color;
  switch (theme) {
    case "secondary":
      font = "font-secondary";
      break;

    default:
      font = "tracking-tigher";
      break;
  }
  switch (display) {
    case "gray":
      color = "text-gray-600";
      break;

    default:
      color = "text-mysecondary";
      break;
  }

  switch (varient) {
    case "h3":
      return (
        <div className="flex items-center justify-center my-5">
          <h3 className={`text-sm ${defaultClass} ${font} ${color}`}>
            {children}
          </h3>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center my-5">
          <h2
            className={` ${
              theme === "secondary" ? "text-5xl" : "text-3xl"
            } ${defaultClass} ${font} ${color}`}
          >
            {children}
          </h2>
        </div>
      );
  }
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.string,
  varient: PropTypes.string,
  display: PropTypes.string,
};
