import PropTypes from "prop-types";

export const Button = ({ children, className, color, theme }) => {
  let background;

  switch (color) {
    case "mysecondary":
      background = "bg-mysecondary hover:bg-mysecondaryHover";
      break;
    case "danger":
      background = "bg-myred hover:bg-myredHover";
      break;
    default:
      background = "bg-myprimary hover:bg-myprimaryHover";
      break;
  }

  switch (theme) {
    case "small":
      return (
        <div>
          <button
            className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
    case "big":
      return (
        <div>
          <button
            className={`${className} ${background} px-8 py-4 uppercase shadow-xl text-white text-base font-medium animate`}
          >
            {children}
          </button>
        </div>
      );

    default:
      return (
        <div>
          <button
            className={`${className} ${background} px-4 py-3 uppercase shadow-xl text-white text-sm font-medium animate`}
          >
            {children}
          </button>
        </div>
      );
  }
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  theme: PropTypes.string,
};
