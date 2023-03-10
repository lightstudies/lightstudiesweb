import PropTypes from 'prop-types';

const PageHeader = ({ text }) => {
  return <div className="text-4xl">{text}</div>;
};

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageHeader;
