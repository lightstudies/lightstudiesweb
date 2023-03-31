import { ModalItem, ResponsiveGrid, ResponsivePlayer } from '../components';
import joan1 from '../assets/thumbnails/joan1.jpeg';
import joan2 from '../assets/thumbnails/joan2.jpeg';
import allThingsTogether from '../assets/thumbnails/all things together.jpg';
import BG from '../assets/thumbnails/BG.png';
// import Breathe from '../assets/thumbnails/Breathe.jpg';
// import UpMountain from '../assets/thumbnails/UpMountain.png';
// import BreathVideo from '../assets/videos/twotp-Breathe.mp4';
// import MountainVideo from '../assets/videos/twotp-up-to-the-mountain.mp4';

const VideoPageMusic = () => {
  const gridItems = [
    <ModalItem key="b9L0EnVvhfA" title="joan - want u back" img={joan1}>
      <ResponsivePlayer url="https://www.youtube.com/embed/b9L0EnVvhfA" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="j1hjHpYiEJs" title="joan - try again" img={joan2}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=j1hjHpYiEJs" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    // <ModalItem key="j1hjHpYiEJs" title="The Brilliance - Breathe" img={Breathe}>
    //   <ResponsivePlayer url={BreathVideo} parentClassName="pt16x9" playing controls />
    // </ModalItem>,
    // <ModalItem key="j1hjHpYiEJs" title="Up To The Mountain" img={UpMountain}>
    //   <ResponsivePlayer url={MountainVideo} parentClassName="pt16x9" playing controls />
    // </ModalItem>,
    <ModalItem key="347398950" title="All Things Together Album" img={allThingsTogether}>
      <ResponsivePlayer url="https://player.vimeo.com/video/347398950" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="350159161" title="BG" img={BG} invertTitle>
      <ResponsivePlayer url="https://player.vimeo.com/video/350159161" parentClassName="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/356937407" parentClassName="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/368138201" parentClassName="pt16x9" controls />
    </ModalItem>,
  ];
  return (
    <div>
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPageMusic;
