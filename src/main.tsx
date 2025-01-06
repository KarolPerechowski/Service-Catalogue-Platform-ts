import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import ServiceDetailsPage from './pages/ServiceDetailsPage.jsx'
import ServiceOrderPage from './pages/ServiceOrderPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div>PAGE NOT FOUND</div>
  },
  {
    path: '/services/:id',
    element: <ServiceDetailsPage />,
    errorElement: <div>PAGE NOT FOUND</div>
  },
  {
    path: '/services/:id/order',
    element: <ServiceOrderPage />,
    errorElement: <div>PAGE NOT FOUND</div>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
