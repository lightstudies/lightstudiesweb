import { PageNav, ResponsivePlayer, ResponsiveGrid, ModalItem, ImageTile } from '../components';
import oldReel from '../assets/thumbnails/old_reels.jpg';
import eclipse from '../assets/thumbnails/eclipse.jpg';
import Always from '../assets/thumbnails/Always.png';
import erase from '../assets/thumbnails/erase.jpg';
import samsonExtended from '../assets/thumbnails/samson-extended.jpg';
import TheWhale from '../assets/thumbnails/The Whale.jpg';
import { useNavigate } from 'react-router-dom';

const VideoPage = () => {
  const navigate = useNavigate();
  const links = [
    { text: 'fiction', link: '/video/fiction' },
    { text: 'non fiction', link: '/video/non-fiction' },
    { text: 'aerial + abstract', link: '/video/aerial-abstract' },
    { text: 'commercial', link: '/video/commercial' },
    { text: 'music', link: '/video/music' },
  ];

  const gridItems = [
    <ModalItem key="330532405" title="Old Demo Reels" img={oldReel}>
      <ResponsivePlayer url="https://player.vimeo.com/video/330532405" parentClassName="pt2x1" playing controls />
      <ResponsivePlayer url="https://vimeo.com/96471326" parentClassName="pt16x9" controls />
      <ResponsivePlayer url="https://vimeo.com/35365673" parentClassName="pt16x9" controls />
    </ModalItem>,
    <ModalItem key="230680349" title="Solar Eclipse" img={eclipse}>
      <ResponsivePlayer url="https://player.vimeo.com/video/230680349" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ModalItem key="302688922" title="Samson Extended Trailer" img={samsonExtended}>
      <ResponsivePlayer url="https://player.vimeo.com/video/302688922" parentClassName="pt2-35x1" playing controls />
    </ModalItem>,
    <ModalItem key="148840488" title="Always Trailer" img={Always}>
      <ResponsivePlayer url="https://player.vimeo.com/video/148840488" parentClassName="pt2-35x1" playing controls />
    </ModalItem>,
    <ModalItem key="568956759" title="Erase the Trace" img={erase}>
      <ResponsivePlayer url="https://player.vimeo.com/video/568956759" parentClassName="pt16x9" playing controls />
    </ModalItem>,
    <ImageTile
      key="the-whale"
      img={TheWhale}
      title="the whale"
      onClick={() => {
        navigate('/video/the-whale')
      }}
    />,
  ];

  return (
    <div>
      <PageNav links={links} />
      <ResponsiveGrid elementArray={gridItems} />
    </div>
  );
};

export default VideoPage;
