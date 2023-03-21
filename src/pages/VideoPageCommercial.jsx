import { ModalItem, ResponsiveGrid, ResponsivePlayer } from '../components';
import HaitiMade from '../assets/thumbnails/HaitiMade.png';
import tELLtHEsTORY from '../assets/thumbnails/tELLtHEsTORY.jpg';
import Dwell from '../assets/thumbnails/Dwell.jpg';
import HFBC from '../assets/thumbnails/HFBC.jpg';
import Table from '../assets/thumbnails/Table.jpg';
import SongLab from '../assets/thumbnails/SongLab.jpg';

const VideoPageCommercial = () => {
  const gridItems = [
    <ModalItem key="658219702" title="Haiti Made" img={HaitiMade}>
      <ResponsivePlayer url="https://player.vimeo.com/video/658219702" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="739857861" title="Tell the Story" img={tELLtHEsTORY}>
      <ResponsivePlayer url="https://player.vimeo.com/video/739857861" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="395066163" title="Dwell" img={Dwell}>
      <ResponsivePlayer url="https://player.vimeo.com/video/395066163" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="43399308" title="HFBC Commercial" img={HFBC}>
      <ResponsivePlayer url="https://player.vimeo.com/video/43399308" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="2e25476f67" title="The Table" img={Table}>
      <ResponsivePlayer url="https://vimeo.com/256865810/2e25476f67" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="454528916" title="Song Lab" img={SongLab}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=9TwxlZd9Gao" parentClassName="pt16x9" playing controls />
    </ModalItem>,
  ];
  return (
    <div>
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPageCommercial;
