import { ModalItem, ResponsiveGrid, ResponsivePlayer } from '../components';
import erase from '../assets/thumbnails/erase.jpg';
import DirkInterviews from '../assets/thumbnails/Dirk Interviews.jpg';
import bridge from '../assets/thumbnails/bridge.png';
import OneConstant from '../assets/thumbnails/One Constant.jpg';
import Oz from '../assets/thumbnails/Oz.png';
import AsaHutchinson from '../assets/thumbnails/AsaHutchinson.png';
import Sandy from '../assets/thumbnails/Sandy.jpg';
import Garrett from '../assets/thumbnails/Garrett.jpg';
import Tommy from '../assets/thumbnails/Tommy.png';
import GrowingUpInChina from '../assets/thumbnails/GrowingUpInChina.jpg';
import Hope from '../assets/thumbnails/Hope.jpg';

const VideoPageNonFiction = () => {

  const gridItems = [
    <ModalItem key="568956759" title="Erase the Trace" img={erase}>
      <ResponsivePlayer url="https://player.vimeo.com/video/568956759" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="nsBsUjlXJqk" title="Dirk Nowitzki Interview" img={DirkInterviews}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=nsBsUjlXJqk" parentClassName="pt2-35x1" playing controls />
    </ModalItem>,
    <ModalItem key="426016821" title="Bridge 2" img={bridge}>
      <ResponsivePlayer url="https://player.vimeo.com/video/426016821" parentClassName="pt2-35x1" playing controls />
    </ModalItem>,
    <ModalItem key="300871783" title="One Constant: Poland" img={OneConstant}>
      <ResponsivePlayer url="https://vimeo.com/300871783" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="329356845" title="Oz" img={Oz}>
      <ResponsivePlayer url="https://player.vimeo.com/video/329356845" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="139354053" title="A. Hutchinson" img={AsaHutchinson}>
      <ResponsivePlayer url="https://vimeo.com/139354053" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="84156564" title="Sandy" img={Sandy}>
      <ResponsivePlayer url="https://player.vimeo.com/video/84156564" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="EzdUn7t65" title="Garett Williamson" img={Garrett}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=EzdUn7t65-U" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="85935795" title="Tommy" img={Tommy}>
      <ResponsivePlayer url="https://vimeo.com/85935795" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="88270840" title="Growing Up in China" img={GrowingUpInChina}>
      <ResponsivePlayer url="https://vimeo.com/88270840" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="Z2K9HeTyvPI" title="Hope: Feature" img={Hope}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=Z2K9HeTyvPI" parentClassName="pt16x9" playing controls />
    </ModalItem>,
  ];
  return (
    <div>
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPageNonFiction;
