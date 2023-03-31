import { Link } from 'react-router-dom';
import { ProdibiImageEmbed } from '../components';
import { PRODIBI_ACCOUNT } from '../constants';
import { useScript } from '../hooks';

const InsideOutPage = () => {
  useScript('./prodibi.embed.2.0.min.js');
  return (
    <div className="flex h-auto flex-col gap-5 pt-5">
      <div className="flex justify-center">
        <Link className="text-6xl hover:bg-neutral-700 hover:text-white" to="/inside-out/buy">
          BUY PRINTS
        </Link>
      </div>
      <div className="flex">
        <div className="flex-1">
          <ProdibiImageEmbed
            className="flex-auto"
            id="1zq70jdql4y9y62"
            account={PRODIBI_ACCOUNT}
            height={15050}
            width={15050}
          />
        </div>

        <div className="flex-1">
          <ProdibiImageEmbed
            className="flex-auto"
            id="9zdr9jxr0g2718v"
            account={PRODIBI_ACCOUNT}
            height={13866}
            width={13866}
          />
        </div>
      </div>
      <div className="px-2 font-default-sans text-lg sm:text-2xl xl:px-0">
        <p>
          INSIDEOUT is a panoramic photography project I’ve developed for many years around the globe. It’s an attempt
          to re-imagine a familiar space as something dreamed/imagined. The visual result stems from my pursuit of the
          possibilities an Einstein-Rosen Bridge (wormhole) could afford if occasioned in a mental/physical space
          familiar to us.
        </p>
        <br />
        <p>
          These are physical pieces intended for close viewing in ultra large format. Currently available for purchase,
          the preferred format is acrylic; other print options are available.
        </p>
        <br />
        <p>
          Commissions for this project are OPEN. I can execute a piece for the outdoor space of one’s choosing
          (landscape, urban, architecture, etc). Please {' '}
          <Link to="mailto:light.studies@gmail.com" target="_blank" className="hover:bg-neutral-700 hover:text-white font-bold">
            contact me
          </Link>{' '}
          if you would like to discuss an INSIDEOUT commission. Thank you!
        </p>
      </div>
    </div>
  );
};

export default InsideOutPage;
