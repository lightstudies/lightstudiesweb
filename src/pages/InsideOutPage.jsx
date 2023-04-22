import { Link } from 'react-router-dom';
import { ProdibiGridEmbed } from '../components';
import { useScript } from '../hooks';

const InsideOutPage = () => {
  useScript('./prodibi.embed.2.0.min.js');
  return (
    <>
      <div className="flex h-auto flex-col gap-5 pt-5">
        <div className="flex justify-center">
          <Link className="text-6xl hover:bg-neutral-700 hover:text-white" to="/inside-out/buy">
            BUY PRINTS
          </Link>
        </div>
        <div>
          <ProdibiGridEmbed container="xdr5je174zrd59e" />
        </div>
        <div className="flex flex-col">
          <div className="px-2 py-4 font-default-sans text-lg sm:text-2xl xl:px-0">
            <p>
              INSIDEOUT is a panoramic photography project developed over many years around the globe; an attempt to
              re-imagine a familiar space as a dream space. A visualization of the possibilities an Einstein-Rosen
              Bridge (wormhole) could afford if occasioned in a mental/physical space familiar to us.
            </p>
            <br />
            <p>
              These are physical pieces intended for ultra large format. Currently available for purchase, the preferred
              format is acrylic; other print options are available at my{' '}
              <Link className="font-bold hover:bg-neutral-700 hover:text-white" to="/inside-out/buy">
                PICTOREM store.
              </Link>
            </p>
            <br />
            <p>
              Commissions for this project are OPEN. I can execute a piece for the outdoor space of one’s choosing
              (landscape, urban, architecture, etc). Please{' '}
              <Link
                to="mailto:light.studies@gmail.com"
                target="_blank"
                className="font-bold hover:bg-neutral-700 hover:text-white"
              >
                contact me
              </Link>{' '}
              if you would like to discuss an INSIDEOUT commission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideOutPage;
