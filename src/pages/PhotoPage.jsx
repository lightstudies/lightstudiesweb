import { useEffect } from 'react';
import { ProdibiGridEmbed, ProdibiImageEmbed, PageNav } from '../components';
import { PRODIBI_ACCOUNT } from '../constants';
import { Link } from 'react-router-dom';
import { useFetch, useScript } from '../hooks';

const PhotoPage = () => {
  const containerId = '2k625zxd8w9odjo';

  const links = [
    { text: 'portrait', link: '/photo/portrait' },
    { text: 'real estate', link: '/photo/real-estate' },
    { text: 'underwater', link: '/photo/underwater' },
    // { text: 'wedding', link: '/photo/wedding' },
  ];
  // const { data, loading, error } = useFetch(
  //   `https://core.prodibi.com/api/biglight/containers/${containerId}?$expand&$select=id,name,title,description,cover,author,hashTags,access,isDownloadEnabled,showStatistics,gridType,type,order,favorite,location,createDate,margin,items/id,items/height,items/width,items/title,items/description,items/author,items/name,items/rating,items/hashTags,items/sas,items/s,items/order,items/smartX,items/smartY,items/favorite,items/location,items/exifs,items/createDate&$orderby=order asc,items/order asc&$info&st=null&t=1676936500235`,
  // );

  useScript('./prodibi.embed.2.0.min.js');

  // useEffect(() => {
  //   const src = './prodibi.embed.2.0.min.js';
  //   let script = document.querySelector(`script[src="${src}"]`);
  //   // attach external script after dom elements are loaded
  //   if (data && !script) {
  //     const prodibiScript = document.createElement('script');
  //     prodibiScript.src = src;
  //     prodibiScript.async = true;
  //     document.body.appendChild(prodibiScript);

  //     window.prodibiAsync = window.prodibiAsync || [];
  //     window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });
  //   }

  //   return (prodibiScript) => {
  //     if (prodibiScript) {
  //       document.body.removeChild(prodibiScript);
  //     }
  //   };
  // }, [data]);

  return (
    <div>
      <PageNav links={links} />
      <ProdibiGridEmbed container={containerId} account={PRODIBI_ACCOUNT} />
      {/* {data?.value.map((image) => (
        <ProdibiImageEmbed
          key={image.id}
          id={image.id}
          height={image.height}
          width={image.width}
          className="flex-auto self-center"
        />
      ))} */}
    </div>
  );
};

export default PhotoPage;
