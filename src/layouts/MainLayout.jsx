import { Nav } from '../components';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex min-h-[100svh] flex-col overflow-x-clip text-white dark:bg-neutral-900">
      <Nav />
      <div className="flex-auto self-stretch">
        <div className="mx-auto max-w-screen-xl justify-center">
          <Outlet />
        </div>
      </div>
      <div className="flex-initial text-center">© Copyright 2023 Joshua Spires</div>
    </div>
  );
};
