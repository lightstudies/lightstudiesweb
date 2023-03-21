import PropTypes from 'prop-types';

const ImageTile = ({ title, img, onClick, invert }) => {
  return (
    <div className="group flex items-center justify-center">
      <button onClick={onClick} className="flex">
        <div className="relative box-border w-96 flex-auto border-8 border-transparent group-hover:border-8 group-hover:border-white">
          <img src={img} alt="some text" />
          <div
            className={`absolute inset-0 z-10 pt-2  ${
              invert && 'text-black'
            } text-4xl opacity-0 group-hover:opacity-100`}
          >
            {title}
          </div>
        </div>
      </button>
    </div>
  );
};

ImageTile.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

export default ImageTile;
