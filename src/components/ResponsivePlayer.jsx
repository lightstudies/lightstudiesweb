import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import MediaControls from './MediaControls';
import PropTypes from 'prop-types';

const ResponsivePlayer = ({
  url,
  parentClassName,
  config,
  playing = false,
  volume = 0.5,
  muted = false,
  controls = true,
  customControls,
}) => {
  const playerDivRef = useRef(null);
  const playerRef = useRef(null);
  // const [isHovering, setIsHovering] = useState(false);
  const [playerState, setPlayerState] = useState({
    longFade: false,
    playing: playing,
    volume: volume,
    muted: muted,
    controls: controls,
    controlsVisible: false,
  });

  const handlePlayAndPause = () => {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
      longFade: !playerState.playing,
      controlsVisible: playerState.playing,
    });
  };

  // const handleMouseMove = () => {
    
  // };

  const handleMouseEnter = () => {
    // setIsHovering(true);
    // Always show controls when mouse enters
    setPlayerState({ ...playerState, controlsVisible: true });
  };

  const handleMouseLeave = () => {
    // setIsHovering(false);
    // Hide controls when mouse leaves
    setPlayerState({ ...playerState, longFade: false, controlsVisible: false });
  };

  const handleMute = () => {
    setPlayerState({ ...playerState, muted: !playerState.muted });
  };

  const handleFullScreenMode = () => {
    screenfull.toggle(playerDivRef.current);
    playerState.playing && setPlayerState({ ...playerState, controlsVisible: false });
  };

  return (
    <div
      className={`relative ${parentClassName}`}
      // onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={playerDivRef}
    >
      <ReactPlayer
        ref={playerRef}
        className="absolute top-0 left-0"
        width="100%"
        height="100%"
        playing={playerState.playing}
        muted={playerState.muted}
        volume={playerState.volume}
        url={url}
        config={config}
        controls={customControls ? false : playerState.controls}
      />
      {customControls && (
        <MediaControls
          playerState={playerState}
          handlePlayAndPause={handlePlayAndPause}
          handleMute={handleMute}
          handleFullScreenMode={handleFullScreenMode}
        />
      )}
    </div>
  );
};

ResponsivePlayer.propTypes = {
  url: PropTypes.string.isRequired,
  parentClassName: PropTypes.string.isRequired,
  config: PropTypes.object,
  playing: PropTypes.bool,
  volume: PropTypes.number,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
  customControls: PropTypes.bool,
};

export default ResponsivePlayer;
