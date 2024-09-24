import PropTypes from "prop-types";

export const Heading = ({ className, children, varient, theme, display }) => {
  const defaultClass = "uppercase";
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
        <div className={`${className} flex`}>
          <h3 className={`text-2xl ${defaultClass} ${font} ${color}`}>
            {children}
          </h3>
        </div>
      );
    case "h4":
      return (
        <div className={`${className} flex`}>
          <h4 className={`text-lg ${defaultClass} ${font} ${color}`}>
            {children}
          </h4>
        </div>
      );

    default:
      return (
        <div className={`${className} flex`}>
          <h2
            className={` ${
              theme === "secondary" ? "text-3xl md:text-5xl" : "text-3xl"
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
  className: PropTypes.string,
};
