import { ProdibiGridEmbed, ResponsivePlayer } from '../components';
import { useScript } from '../hooks';
import { PRODIBI_ACCOUNT } from '../constants';

const PhotoPageWedding = () => {
  const containerId = 'jvegrjgvemxklx5';
  useScript('../prodibi.embed.2.0.min.js');
  return (
    <div>
      <ResponsivePlayer url="https://vimeo.com/97139512" parentClassName="pt16x9" controls/>
      <ResponsivePlayer url="https://vimeo.com/381833265" parentClassName="pt16x9" controls/>
      <ResponsivePlayer url="https://vimeo.com/223853392" parentClassName="pt16x9" controls/>
      <ProdibiGridEmbed container={containerId} account={PRODIBI_ACCOUNT} />
    </div>
  );
};

export default PhotoPageWedding;
