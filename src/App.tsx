import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CreatePizzaPage from './pages/CreatePizzaPage';
import React, { Suspense } from 'react';
// import DetailPizzaPage from './pages/DetailPizzaPage';
const DetailPizzaPage = React.lazy(() => import('./pages/DetailPizzaPage'))

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/create-pizza',
        element: <CreatePizzaPage />
      },
      {
        path: '/pizza/:id',
        element: <DetailPizzaPage />
      },
    ]
  }
]

const router = createBrowserRouter([
  {
    element: (
      <Outlet/>
    ),
    children: appRoutes
    
  }
])

function App() {

  return (
    <Suspense>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App;
