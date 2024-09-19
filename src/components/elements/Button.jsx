import PropTypes from "prop-types";

export const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={`${className} px-4 py-3 uppercase shadow-xl text-white tracking-wider text-sm font-medium hover:bg-mysecondary animate`}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
