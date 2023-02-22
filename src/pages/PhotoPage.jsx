import { useEffect } from 'react';
import { ProdibiImageEmbed } from '../components';
import { PRODIBI_ACCOUNT } from '../constants';
import { useFetch } from '../hooks';

export const PhotoPage = () => {

  const containerId = 'wo7kv5w1z2r92r0';
  const { data, loading, error } = useFetch(
    `https://core.prodibi.com/api/biglight/containers/${containerId}?$expand&$select=id,name,title,description,cover,author,hashTags,access,isDownloadEnabled,showStatistics,gridType,type,order,favorite,location,createDate,margin,items/id,items/height,items/width,items/title,items/description,items/author,items/name,items/rating,items/hashTags,items/sas,items/s,items/order,items/smartX,items/smartY,items/favorite,items/location,items/exifs,items/createDate&$orderby=order asc,items/order asc&$info&st=null&t=1676936500235`,
  );

  useEffect(() => {
    const src = './prodibi.embed.2.0.min.js';
    let script = document.querySelector(`script[src="${src}"]`)
    // attach external script after dom elements are loaded
    if (data && !script) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);

      window.prodibiAsync = window.prodibiAsync || [];
      window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="flex flex-col">
      PhotoPage
      {/* <canvas data-prodibi='{"id":"2k2m481dmx896kd","width":23776,"height":13772,"widthMode":"aspectRatio","heightMode":"90vh","branding":false,"account":"biglight"}'></canvas> */}
      {loading && <div>Loading...</div>}
      {/* <canvas data-prodibi='{"id":"6420q8q6q7lr7qg","width":7520,"height":4554,"widthMode":"aspectRatio","heightMode":"90vh","branding":false,"account":"biglight"}'></canvas> */}
      {data?.value.map((image) => (
        <ProdibiImageEmbed key={image.id} account={PRODIBI_ACCOUNT} id={image.id} height={image.height} width={image.width} className="flex"/>
      ))}
    </div>
  );
};
