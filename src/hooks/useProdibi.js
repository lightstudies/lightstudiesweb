import { useEffect } from 'react';
import { PRODIBI_ACCOUNT } from '../constants';

const useProdibi = () => {
  useEffect(() => {
    const src = './prodibi.embed.2.0.min.js';
    let script = document.querySelector(`script[src="${src}"]`);
    // attach external script after dom elements are loaded
    if (!script) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);

      window.prodibiAsync = window.prodibiAsync || [];
      window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });
    }

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
};

export default useProdibi;
