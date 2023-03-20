import { ProdibiGridEmbed, ResponsivePlayer } from '../components';
import { useScript } from '../hooks';
import { PRODIBI_ACCOUNT } from '../constants';

const PhotoPageRealEstate = () => {
  const containerId = 'm41vwkm1r0mylqw';
  useScript('../prodibi.embed.2.0.min.js');
  return (
    <div className="bg-zinc-800">
      <ProdibiGridEmbed container={containerId} account={PRODIBI_ACCOUNT} />
      <ResponsivePlayer url="https://player.vimeo.com/video/734491170" className="pt16x9" controls/>
      {/* <ResponsivePlayer url="https://www.facebook.com/woodsdesignhouse/videos/728734418723363/" className="pt16x9" controls/> */}
    </div>
  );
};


export default PhotoPageRealEstate