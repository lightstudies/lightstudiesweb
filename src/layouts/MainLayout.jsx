import { Nav } from '../components';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex h-full flex-col">
      <Nav />
      {/* <div className="App-header">Header</div> */}
      <div className="flex-1">
        <Outlet />
      </div>
      <div className="mt-auto justify-center self-center">Footer</div>
    </div>
  );
};
