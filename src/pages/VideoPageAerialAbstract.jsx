import { ResponsivePlayer } from '../components';

const VideoPageAerialAbstract = () => {
  return (
    <div>
      <div className="text-3xl">aerial + abstract</div>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=4bHlbIYFpsk" className="pt16x9" controls/>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=BnVozlpFCoI" className="pt16x9" controls/>
      <ResponsivePlayer url="https://player.vimeo.com/video/725862732" className="pt16x9" controls/>
      <ResponsivePlayer url="https://player.vimeo.com/video/236817957" className="pt16x9" controls/>
      <ResponsivePlayer url="https://player.vimeo.com/video/91558103" className="pt16x9" controls/>
    </div>
  );
};

export default VideoPageAerialAbstract;
