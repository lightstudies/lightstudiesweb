import PropTypes from 'prop-types';

const PictoremEmbed = ({ src }) => {
  return <iframe title={src} className="flex-1" src={src} allowFullScreen frameBorder={0}></iframe>;
};

PictoremEmbed.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PictoremEmbed;
