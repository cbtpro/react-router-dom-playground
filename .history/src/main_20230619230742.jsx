import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  // createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root from './routers/root'
import Contact from ''./routes/contact';
import ErrorPage from './error-page'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
