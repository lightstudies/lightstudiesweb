import { Link } from 'react-router-dom';
import { ResponsivePlayer } from '../components';

const VideoPageHope = () => {
  return (
    <div className="flex h-auto flex-col gap-5 pt-5">
      <div className="mb-[2px]">
        <ResponsivePlayer url="https://player.vimeo.com/video/97468716" parentClassName="pt16x9" controls />
      </div>
      <div className="flex justify-center">
        <Link
          className="p-2 text-3xl text-neutral-300 hover:bg-neutral-700 hover:text-white sm:text-4xl"
          to="https://youtu.be/Z2K9HeTyvPI"
          target="_blank"
        >
          Watch the Hope feature documentary on YouTube
        </Link>
      </div>
    </div>
  );
};

export default VideoPageHope;
