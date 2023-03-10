import ReactPlayer from 'react-player';
import { ProdibiGridEmbed } from '../components';

const HomePage = () => {
  return (
    <div>
      <ReactPlayer url="https://player.vimeo.com/video/330532405" controls />
      <ProdibiGridEmbed container="g6q6wg7446w87r6" />
    </div>
  );
};

export default HomePage;
