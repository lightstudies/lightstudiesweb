import { ProdibiGridEmbed, ResponsivePlayer } from '../components';
import { useScript } from '../hooks';

const HomePage = () => {
  useScript('./prodibi.embed.2.0.min.js');
  return (
    <div>
      <div className="mb-[2px]">
        <ResponsivePlayer controls url="https://www.youtube.com/watch?v=afpu5nrEUss" parentClassName="pt16x9" />
      </div>
      <div>
        <p className="py-6 text-center [font-size:4cqw] xl:[font-size:3.4rem]">
          <q>Light is not so much something that reveals, as it is itself the revelation.</q>
        </p>
      </div>
      <ProdibiGridEmbed container="g6q6wg7446w87r6" />
    </div>
  );
};

export default HomePage;
