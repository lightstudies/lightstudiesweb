import { ModalItem, ResponsiveGrid, ResponsivePlayer } from '../components';
import SpaceInMyHeart from '../assets/thumbnails/SpaceInMyHeart.jpg';
import Haiti from '../assets/thumbnails/Haiti-Aerial.jpg';
import merlo from '../assets/thumbnails/merlo.jpg';
import BornJustLikeUs2 from '../assets/thumbnails/BornJustLikeUs2.jpg';
import coney_island from '../assets/thumbnails/coney_island.jpg';
import la_question from '../assets/thumbnails/la_question.png';

const VideoPageAerialAbstract = () => {
  const gridItems = [
    <ModalItem key="4bHlbIYFpsk" title="This Space In My Heart Is For You" img={SpaceInMyHeart}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=4bHlbIYFpsk" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="725862732" title="Haiti" img={Haiti}>
      <ResponsivePlayer url="https://player.vimeo.com/video/725862732" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="236817957" title="Merlo" img={merlo}>
      <ResponsivePlayer url="https://player.vimeo.com/video/236817957" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="y3a_Jm9foXQ" title="Born Just Like Us" img={BornJustLikeUs2}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=y3a_Jm9foXQ" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="91558103" title="Coney Island" img={coney_island}>
      <ResponsivePlayer url="https://vimeo.com/91558103" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="7GZ9-LYNaF8" title="La Question" img={la_question}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=7GZ9-LYNaF8" parentClassName="pt16x9" playing controls />
    </ModalItem>,
  ];

  return (
    <div>
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPageAerialAbstract;
