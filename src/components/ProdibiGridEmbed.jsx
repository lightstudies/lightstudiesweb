import PropTypes from 'prop-types';
import { useProdibi } from '../hooks';

const ProdibiGridEmbed = ({ container, account, openTriggers, seo, className }) => {

  useProdibi();
  const prodibiData = {
    type: 'grid',
    settings: {
      container,
      account,
      openTriggers,
      branding: false,
      seo,
    },
  };
  return <div className={className} data-prodibi={JSON.stringify(prodibiData)}></div>;
};

ProdibiGridEmbed.propTypes = {
  container: PropTypes.string.isRequired,
  account: PropTypes.string,
  openTriggers: PropTypes.string,
  seo: PropTypes.bool,
  className: PropTypes.string,
};

export default ProdibiGridEmbed;
