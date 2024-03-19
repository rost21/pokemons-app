import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import { Layout } from "./layout";

const PokemonsPage = lazy(() => import('./pokemons'));
const OtherPage = lazy(() => import('./otherPage'));
const Page404 = lazy(() => import('./not-found'));

export const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <Layout>
          <Suspense>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        { element: <PokemonsPage />, index: true },
        { path: '/other', element: <OtherPage /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
