import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageNav = ({ links }) => {
  return (
    <div className="pt-5 flex flex-col">
      <div className="my-2 sm:my-5 flex flex-row flex-wrap justify-around sm:justify-center">
        {links.map((link) => (
          <Link
            key={link.text}
            to={link.link}
            className="w-1/8 mx-3 sm:mx-5 p-3 sm:p-5 text-center text-xl sm:text-3xl text-neutral-300 hover:bg-neutral-700 hover:text-white"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

PageNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PageNav;
