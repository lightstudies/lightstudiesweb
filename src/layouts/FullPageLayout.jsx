import { Nav } from '../components';
import { Outlet } from 'react-router-dom';

export const FullPageLayout = () => {
  return (
    <div className="flex h-full w-full flex-col items-center text-white dark:bg-primary">
      <div className="flex-initial self-stretch">
        <Nav />
      </div>
      <div className="flex-auto self-stretch">
        <Outlet />
      </div>
      <div className="mt-auto flex-initial self-stretch text-center">© Copyright 2023 Joshua Spires</div>
    </div>
  );
};
