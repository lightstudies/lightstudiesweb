import { ProdibiGridEmbed } from '../components';
import { useScript } from '../hooks';
import { PRODIBI_ACCOUNT } from '../constants';

const PhotoPagePortrait = () => {
  const containerId = 'oz9y48m07k9rd0m';
  useScript('../prodibi.embed.2.0.min.js');
  return (
    <div className="gap-4 bg-zinc-800">
      <ProdibiGridEmbed container={containerId} account={PRODIBI_ACCOUNT} />
    </div>
  );
};

export default PhotoPagePortrait