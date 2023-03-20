import {
  AboutPage,
  HomePage,
  InsideOutPage,
  InsideOutEmbedPage,
  PhotoPage,
  PhotoPagePortrait,
  PhotoPageRealEstate,
  PhotoPageUnderwater,
  PhotoPageWedding,
  VideoPage,
  VideoPageFiction,
  VideoPageNonFiction,
  VideoPageAerialAbstract,
  VideoPageCommercial,
  VideoPageMusic,
  VideoPageTheWhale,
} from './pages';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { FullPageLayout, MainLayout } from './layouts';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="photo">
          <Route index element={<PhotoPage />} />
          <Route path="portrait" element={<PhotoPagePortrait />} />
          <Route path="real-estate" element={<PhotoPageRealEstate />} />
          <Route path="underwater" element={<PhotoPageUnderwater />} />
          <Route path="wedding" element={<PhotoPageWedding />} />
        </Route>
        <Route path="video">
          <Route index element={<VideoPage />} />
          <Route path="fiction" element={<VideoPageFiction />} />
          <Route path="non-fiction" element={<VideoPageNonFiction />} />
          <Route path="aerial-abstract" element={<VideoPageAerialAbstract />} />
          <Route path="commercial" element={<VideoPageCommercial />} />
          <Route path="music" element={<VideoPageMusic />} />
          <Route path="the-whale" element={<VideoPageTheWhale />} />
        </Route>
        <Route path="inside-out" element={<InsideOutPage />} />
      </Route>

      <Route element={<FullPageLayout />}>
        <Route path="inside-out/buy" element={<InsideOutEmbedPage />} />
      </Route>
    </RouterRoutes>
  );
};

export default Routes;
