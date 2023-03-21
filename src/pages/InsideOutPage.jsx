import { Link } from 'react-router-dom';
import { ProdibiImageEmbed } from '../components';
import { PRODIBI_ACCOUNT } from '../constants';
import { useScript } from '../hooks';

const InsideOutPage = () => {
  useScript('../prodibi.embed.2.0.min.js');
  return (
    <div className="flex h-auto flex-col gap-5 pt-5">
      <div className="font-default-sans text-2xl">
        <p>
          INSIDEOUT is a panoramic photography project I have been developing for many years across the globe. It is an
          attempt to re-imagine a familiar space as something dreamed or imagined. Personally, the result is linked to
          my fascination and pursuit of the possibilities a (Einstein-Rosenbridge) Worm-hole could afford if occasioned
          in a space (mental or physical) familiar to us.
        </p>
        <br />
        <p>
          These photographic results are intended to be viewed in an ultra large format in person, however I am making
          them available for viewing/purchasing online in case one might like to order said large print. My preferred
          format is acrylic, however I am offering a few other options that work well.
        </p>
        <br />
        <p>
          All that said: the real intent of both my project and this page is to open commissions. This work can be
          commissioned for any outdoor space; landscape, architecture, urban, etc. Please contact me if you would like
          to discuss an INSIDEOUT commission. Thank you!
        </p>
      </div>
      <div>
        <Link className="float-right text-3xl" to="/inside-out/buy">
          buy prints
        </Link>
      </div>
      <ProdibiImageEmbed
        className="flex-auto self-center"
        id="oz9y45eylk2d1jq"
        account={PRODIBI_ACCOUNT}
        height={13800}
        width={27700}
      />
    </div>
  );
};

export default InsideOutPage;
