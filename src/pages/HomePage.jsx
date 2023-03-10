import ReactPlayer from 'react-player';
import { ProdibiGridEmbed } from '../components';
import { useScript } from '../hooks';

const HomePage = () => {
  useScript('./prodibi.embed.2.0.min.js');
  
  return (
    <div>
      <ReactPlayer url="https://player.vimeo.com/video/330532405" controls />
      <ProdibiGridEmbed container="g6q6wg7446w87r6" />
    </div>
  );
};

export default HomePage;
