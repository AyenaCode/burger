import PropTypes from "prop-types";

export const HeadingTittle = ({ children, varient }) => {
  const defaultClass =
    "px-7 py-3 text-mysecondary font-bold inline-block bg-myprimary uppercase";

  switch (varient) {
    case "h3":
      return (
        <div className="flex items-center justify-center my-5">
          <h3 className={`text-sm ${defaultClass}`}>{children}</h3>
        </div>
      );

    default:
      return (
        <div className="flex items-center justify-center my-5">
          <h2 className={` ${defaultClass}`}>{children}</h2>
        </div>
      );
  }
};

HeadingTittle.propTypes = {
  children: PropTypes.string.isRequired,
  varient: PropTypes.string,
};
