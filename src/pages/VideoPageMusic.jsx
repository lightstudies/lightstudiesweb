import { ResponsivePlayer } from '../components';

const VideoPageMusic = () => {
  return (
    <div>
    <div className="text-3xl">music</div>
    <ResponsivePlayer url="https://www.youtube.com/embed/b9L0EnVvhfA" className="pt16x9" controls />
    <ResponsivePlayer url="https://www.youtube.com/watch?v=j1hjHpYiEJs" className="pt16x9" controls />
    <ResponsivePlayer url="https://player.vimeo.com/video/347398950" className="pt16x9" controls />
    <ResponsivePlayer url="https://player.vimeo.com/video/350159161" className="pt16x9" controls />
    <ResponsivePlayer url="https://player.vimeo.com/video/356937407" className="pt16x9" controls />
    <ResponsivePlayer url="https://player.vimeo.com/video/368138201" className="pt16x9" controls />
    <ResponsivePlayer url="https://www.facebook.com/watch/?v=1148290552590455" className="pt16x9" controls/>
    <ResponsivePlayer url="https://player.vimeo.com/video/505907842" className="pt16x9" controls/>
    </div>
  );
};

export default VideoPageMusic;
