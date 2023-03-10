import { useEffect } from 'react';
import { Nav } from '../components';
import { PRODIBI_ACCOUNT } from '../constants';
import { useScript } from '../hooks';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  // if(vimeoStatus != 'ready' || prodibiStatus != 'ready') {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-col h-full">
      <Nav />
      {/* <div className="App-header">Header</div> */}
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="mt-auto">Footer</div>
    </div>
  );
};
