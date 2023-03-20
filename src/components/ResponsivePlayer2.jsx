import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import screenfull from 'screenfull';

const ResponsivePlayer = (props) => {
  const { className, fullScreen, ...otherProps } = props;
  const playerDivRef = useRef(null);
  // const classAtr = `pt-[${aspectRatio}%]`

  if (fullScreen) {
    screenfull.toggle(playerDivRef.current);
  }

  // const handleFullScreenMode = () => {
  //   screenfull.toggle(playerDivRef.current);
  // };
  return (
    <div className={`relative ${className}`} ref={playerDivRef}>
      <ReactPlayer className="absolute top-0 left-0" width="100%" height="100%" {...otherProps} />
    </div>
  );
};

ResponsivePlayer.propTypes = {
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
};

export default ResponsivePlayer;
