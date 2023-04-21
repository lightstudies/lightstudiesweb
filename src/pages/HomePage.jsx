import { useState, useEffect } from 'react';
import { ProdibiGridEmbed, ResponsivePlayer } from '../components';
import { useScript } from '../hooks';
const HomePage = () => {
  useScript('./prodibi.embed.2.0.min.js');
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const quotes = [
      { string: 'Light is not so much something that reveals, as it is itself the revelation.', size: '4', xlSize: '3.4' },
      { string: 'If there is magic on this planet, it is contained in water.', size: '5', xlSize: '3.4' },
      { string: 'The shadow is the greatest teacher for how to come to the light.', size: '4', xlSize: '3.4' },
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);
  return (
    <div>
      <div className="mb-[2px]">
        <ResponsivePlayer
          customControls
          // light={reelThumbnail}
          url="https://player.vimeo.com/video/819910476"
          config={{
            vimeo: {
              playerOptions: { keyboard: false },
            },
          }}
          parentClassName="pt16x9"
        />
      </div>
      <div>
        <p className={`py-3 text-center [font-size:${randomQuote.size}cqw] sm:py-6 xl:[font-size:${randomQuote.xlSize}rem]`}>
          <q>{randomQuote.string}</q>
        </p>
      </div>
      <ProdibiGridEmbed container="g6q6wg7446w87r6" />
    </div>
  );
};

export default HomePage;
