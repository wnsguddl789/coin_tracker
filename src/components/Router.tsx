import { createBrowserRouter, RouterProvider as RouteProvider } from 'react-router-dom';

import CoinListPage from '@pages/CoinListPage';
import CoinDetailPage from '@pages/CoinDetailPage';

export default function RouterProvider() {
  const router = createBrowserRouter([
    { path: '/', element: <CoinListPage /> },
    { path: '/:coinId', element: <CoinDetailPage /> },
  ]);

  return <RouteProvider router={router} />;
}
