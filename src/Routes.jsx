import {
  AboutPage,
  BuyPage,
  HomePage,
  InsideOutPage,
  PhotoPage,
  PhotoPagePortrait,
  PhotoPageRealEstate,
  PhotoPageUnderwater,
  PhotoPageWedding,
  VideoPage,
  VideoPagePortrait,
} from './pages';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { MainLayout } from './layouts';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="photo" >
          <Route index element={<PhotoPage />} />
          <Route path="portrait" element={<PhotoPagePortrait />} />
          <Route path="real-estate" element={<PhotoPageRealEstate />} />
          <Route path="underwater" element={<PhotoPageUnderwater />} />
          <Route path="wedding" element={<PhotoPageWedding />} />
        </Route>
        <Route path="video" >
          <Route index element={<VideoPage />} />
          <Route path="portrait" element={<VideoPagePortrait />} />
        </Route>
        <Route path="inside-out" element={<InsideOutPage />} />
        <Route path="buy" element={<BuyPage />} />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
