import PropTypes from "prop-types";

export const Container = ({ children }) => {
  return (
    <div className="max-w-6xl h-full m-auto px-5 xl:px-0"> {children} </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
