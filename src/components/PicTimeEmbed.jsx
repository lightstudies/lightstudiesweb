import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useScript } from '../hooks';

const PicTimeEmbed = () => {
  // const searchread_64091326f6816e58acd05f08 = `<h1 data-tokenid="text1" className="slide-asset BLG_F20 BLG_W4 BLG_S13 BLG_H2 BLG_L1">Prints</h1><div data-tokenid="text3" className="slide-asset BLG_F21 BLG_W2 BLG_S4 BLG_H4 BLG_U1 BLG_L2">February 15, 2023</div><div data-tokenid="text4" className="slide-asset BLG_F21 BLG_W2 BLG_S4 BLG_H4 BLG_U1 BLG_L2">Buy My Prints!<br /></div><div data-tokenid="text6" className="slide-asset BLG_F21 BLG_W4 BLG_S8 BLG_H4 BLG_U1 BLG_L1">Vendors</div><div data-tokenid="text7" className="slide-asset BLG_F20 BLG_I1 BLG_W4 BLG_S5 BLG_H4 BLG_U1 BLG_L2">Photographer<br /><a href="http://www.light-studies.com" target="blank">LIGHT STUDIES</a><br /><br />Makeup<br />MAKEUP ARTIST NAME<br /><br />Hair<br />HAIR STYLIST NAME<br /><br />Venue<br />VENUE NAME AND LOCATION</div><div data-tokenid="text9" className="slide-asset BLG_F21 BLG_W7 BLG_S5 BLG_H4 BLG_L2 BLG_U1">View Full Gallery</div>`;

  useScript('https://spires.pic-time.com/-prints3168/slideswebcomponentembed.js/64091326f6816e58acd05f08');
  return (
    <template
      data-pt-type="blog"
      data-pt-slideshowid="64091326f6816e58acd05f08"
      data-pt-features="lightbox"
      data-pt-filtertags=""
    ></template>
  );
};

PicTimeEmbed.propTypes = {
  // id: PropTypes.string.isRequired,
};

export default PicTimeEmbed;
