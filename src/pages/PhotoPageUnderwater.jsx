import { ProdibiGridEmbed } from '../components';
import { useScript } from '../hooks';
import { PRODIBI_ACCOUNT } from '../constants';

const PhotoPageUnderwater = () => {
  const containerId = '2ko0zy977loqxyd';
  useScript('../prodibi.embed.2.0.min.js');
  return (
    <div className="gap-4 bg-zinc-800">
      <ProdibiGridEmbed container={containerId} account={PRODIBI_ACCOUNT} />
    </div>
  );
};


export default PhotoPageUnderwater