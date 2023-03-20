import { ProdibiGridEmbed, ResponsivePlayer } from '../components';
import { useScript } from '../hooks';

const HomePage = () => {
  useScript('./prodibi.embed.2.0.min.js');

  return (
    <div>
      <div className="mb-[2px]">
        <ResponsivePlayer
          customControls
          url="https://player.vimeo.com/video/330532405"
          config={{
            vimeo: {
              playerOptions: { keyboard: false },
            },
          }}
          parentClassName="pt2x1"
        />
      </div>
      <ProdibiGridEmbed container="g6q6wg7446w87r6" />
    </div>
  );
};

export default HomePage;
