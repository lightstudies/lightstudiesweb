import { Link } from 'react-router-dom';
import { ResponsivePlayer } from '../components';

const VideoPageTheWhale = () => {
  return (
    <div className="flex h-auto flex-col gap-5 pt-5">
      <div className="font-default-sans text-lg sm:text-2xl">
        <p>
          The Whale was our capstone short film which I shot on Super 16mm. It later would win the Kodak International
          Cinematography Award, and we screened it in France at the Clermont-Ferrand International Short Film Festival.
          Below is the trailer, a link to the feature, and a special feature I cut after the screening run.
        </p>
        <br />
      </div>

      <div className="mb-[2px]">
        <ResponsivePlayer
          customControls
          url="https://vimeo.com/22499243"
          config={{
            vimeo: {
              playerOptions: { keyboard: false },
            },
          }}
          parentClassName="pt16x9"
        />
      </div>
      <div className="flex justify-center">
        <Link className="text-4xl" to="https://vimeo.com/26554625" target="_blank">
          Watch The Whale Feature Film on Vimeo
        </Link>
      </div>
      <div className="flex justify-center">
        <Link
          className="text-4xl"
          to="https://www.indiewire.com/2011/11/kodak-unveils-2011-film-school-cinematography-competition-winners-51348/"
          target="_blank"
        >
          Indie Wire article
        </Link>
      </div>

      <div className="mb-[2px]">
        <ResponsivePlayer
          customControls
          url="https://vimeo.com/26854736"
          config={{
            vimeo: {
              playerOptions: { keyboard: false },
            },
          }}
          parentClassName="pt16x9"
        />
      </div>
    </div>
  );
};

export default VideoPageTheWhale;
