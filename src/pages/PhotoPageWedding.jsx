import { ProdibiGridEmbed, ResponsivePlayer } from '../components';
import { useScript } from '../hooks';
import { PRODIBI_ACCOUNT } from '../constants';

const PhotoPageWedding = () => {
  const containerId = 'jvegrjgvemxklx5';
  useScript('../prodibi.embed.2.0.min.js');
  return (
    <div>
      <ProdibiGridEmbed container={containerId} account={PRODIBI_ACCOUNT} />
      <ResponsivePlayer url="https://vimeo.com/97139512" className="pt16x9" controls/>
    </div>
  );
};

export default PhotoPageWedding;
