import PropTypes from 'prop-types';

const ResponsiveGrid = ({ elementArray }) => {
  return (
    <div className="flex flex-col flex-wrap items-center md:flex-row md:gap-5">
      {elementArray.map((element, index) => (
        <div key={index} className="flex-shrink flex-grow">
          {element}
        </div>
      ))}
    </div>
  );
};

ResponsiveGrid.propTypes = {
  elementArray: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default ResponsiveGrid;
