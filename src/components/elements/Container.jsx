import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return (
    <div className="bg-gray-300 max-w-6xl h-full m-auto"> {children} </div>
  );
};

Container.propTypes = {
  children: PropTypes.isRequired,
};
