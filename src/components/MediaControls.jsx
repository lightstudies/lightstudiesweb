import PropTypes from 'prop-types';

const MediaControls = ({ playerState, handleFullScreenMode, handleMute, handlePlayAndPause }) => {
  return (
    <div>
      <button onClick={handlePlayAndPause} className="absolute top-0 left-0 z-10 h-full w-full"></button>
      {/* {controlsVisible && ( */}
      <div
        className={`transition-opacity ${playerState.longFade ? 'duration-[1000ms]' : 'duration-500'} ${
          playerState.controlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="">
          {playerState.playing ? (
            <button
              onClick={handlePlayAndPause}
              className="focus:shadow-outline absolute top-3/4 left-1/2 z-20 mr-2 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white p-1 text-xl text-white transition-colors duration-150 hover:border-transparent hover:bg-white hover:text-black md:h-40 md:w-40 md:text-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10 md:h-20 md:w-20"
              >
                <path d="M15 6.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H15zM20.25 6.75a.75.75 0 00-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75zM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handlePlayAndPause}
              className="focus:shadow-outline absolute top-3/4 left-1/2 z-20 mr-2 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white p-1 text-xl text-white transition-colors duration-150 hover:border-transparent hover:bg-white hover:text-black md:h-40 md:w-40 md:text-3xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10 md:h-20 md:w-20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <button
          onClick={handleMute}
          className="focus:shadow-outline absolute right-0 bottom-0 z-20 mr-2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-sm  border border-white p-2 text-white transition-colors delay-75 duration-150 hover:border-transparent hover:bg-white hover:text-black md:text-xl"
        >
          {playerState.muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
              <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
            </svg>
          )}
        </button>

        <button
          onClick={handleFullScreenMode}
          className="focus:shadow-outline h-15 w-15 absolute left-0 bottom-0 z-20 ml-2 inline-flex -translate-y-1/2 items-center justify-center rounded-sm border border-white p-2 text-white transition-colors delay-75 duration-150 hover:border-transparent hover:bg-white hover:text-black md:text-xl"
        >
          <svg
            height="14px"
            version="1.1"
            viewBox="0 0 14 14"
            width="14px"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
          >
            <path
              d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z"
              id="Shape"
            />
          </svg>
        </button>
      </div>
      {/* )} */}
    </div>
  );
};

MediaControls.propTypes = {
  handlePlayAndPause: PropTypes.func.isRequired,
  handleMute: PropTypes.func.isRequired,
  handleFullScreenMode: PropTypes.func.isRequired,
  playerState: PropTypes.object.isRequired,
};

export default MediaControls;
