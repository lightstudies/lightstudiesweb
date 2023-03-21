import { Nav } from '../components';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex min-h-full flex-col items-center overflow-x-clip text-white dark:bg-neutral-900">
      <div className="w-full flex-initial">
        <Nav />
      </div>
      <div className="w-full flex-auto self-stretch">
        <div className="mx-auto max-w-[1280px] justify-center">
          <Outlet />
        </div>
      </div>
      <div className="flex-initial text-center">© Copyright 2023 Joshua Spires</div>
    </div>
  );
};
