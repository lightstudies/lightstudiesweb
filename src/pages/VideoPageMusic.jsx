import { ModalItem, ResponsiveGrid, ResponsivePlayer } from '../components';
import Messiah from '../assets/thumbnails/Messiah.jpg';
// import Messiah2 from '../assets/thumbnails/Messiah.jpg';
import allThingsTogether from '../assets/thumbnails/all things together.jpg';
import BG from '../assets/thumbnails/BG.png';
// import Messiah from '../assets/thumbnails/Messiah.jpg';
// import Messiah from '../assets/thumbnails/Messiah.jpg';

const VideoPageMusic = () => {
  const gridItems = [
    <ModalItem key="b9L0EnVvhfA" title="Joan 1" img={Messiah}>
      <ResponsivePlayer url="https://www.youtube.com/embed/b9L0EnVvhfA" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="j1hjHpYiEJs" title="Joan 2" img={Messiah}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=j1hjHpYiEJs" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="347398950" title="All Things Together Album" img={allThingsTogether}>
      <ResponsivePlayer url="https://player.vimeo.com/video/347398950" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="350159161" title="BG" img={BG} invertTitle>
      <ResponsivePlayer url="https://player.vimeo.com/video/350159161" parentClassName="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/356937407" parentClassName="pt16x9" controls />
      <ResponsivePlayer url="https://player.vimeo.com/video/368138201" parentClassName="pt16x9" controls />
    </ModalItem>,
    // <ModalItem key="356937407" title="BG 2" img={BG}>
    //   <ResponsivePlayer url="https://player.vimeo.com/video/356937407" parentClassName="pt16x9" controls />
    // </ModalItem>,
    // <ModalItem key="368138201" title="BG 3" img={BG}>
    //   <ResponsivePlayer url="https://player.vimeo.com/video/368138201" parentClassName="pt16x9" controls />
    // </ModalItem>,
  ];
  return (
    <div>
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPageMusic;
