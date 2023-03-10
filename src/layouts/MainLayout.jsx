import { Nav } from '../components';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {

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
