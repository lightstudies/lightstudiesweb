import { ImageTile, ModalItem, ResponsiveGrid, ResponsivePlayer } from '../components';
import TheWhale from '../assets/thumbnails/The Whale.jpg';
import Messiah from '../assets/thumbnails/Messiah.jpg';
import Samson from '../assets/thumbnails/Samson.jpg';
import HereIam from '../assets/thumbnails/HereIam.png';
import rescued from '../assets/thumbnails/rescued.png';
import handel from '../assets/thumbnails/handel.png';
// import Unforgiving from '../assets/thumbnails/Unforgiving.png';
// import MissingPeace from '../assets/thumbnails/MissingPeace.png';
import { useNavigate } from 'react-router-dom';

const VideoPageFiction = () => {
  const navigate = useNavigate();
  const gridItems = [
    <ImageTile
      key="the-whale"
      img={TheWhale}
      title="the whale"
      onClick={() => {
        navigate('/video/the-whale');
      }}
    />,
    <ModalItem key="193435979" title="Messiah Trailer" img={Messiah}>
      <ResponsivePlayer url="https://vimeo.com/193435979" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="fHeQ2oTIahc" title="Samson: Trailer" img={Samson}>
      <ResponsivePlayer url="https://www.youtube.com/watch?v=fHeQ2oTIahc" parentClassName="pt2-35x1" playing controls />
    </ModalItem>,
    <ModalItem key="211737522" title="Rescued: Trailer" img={rescued} invertTitle>
      <ResponsivePlayer url="https://player.vimeo.com/video/211737522" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="191875160" title="Handel" img={handel}>
      <ResponsivePlayer url="https://player.vimeo.com/video/191875160" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    // <ModalItem key="505309645" title="The Unforgiving" img={Unforgiving}>
    //   <ResponsivePlayer
    //     url="https://vimeo.com/showcase/9241692/video/505309645"
    //     parentClassName="pt16x9"
    //     playing
    //     controls
    //   />
    // </ModalItem>,
    // <ModalItem key="481471861" title="Missing Peace: Trailer" img={MissingPeace}>
    //   <ResponsivePlayer url="https://player.vimeo.com/video/481471861" parentClassName="pt16x9" playing controls />
    // </ModalItem>,
    <ModalItem key="86793409" title="Here I am" img={HereIam}>
      <ResponsivePlayer url="https://player.vimeo.com/video/86793409" parentClassName="pt2-35x1" playing controls />
    </ModalItem>,
  ];
  return (
    <div className="pt-4">
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPageFiction;
