import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import Movies from './pages/Movies.jsx'
import './index.css'
import {
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error.jsx';
import Details from './pages/Details.jsx';
import Layout from './Layout.jsx';
import WatchNow from './pages/WatchNow.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/", 
        element: <App/>
      },
      {
        path: "/series", 
        element: <Movies />, 
      },
      {
        path:"anime/:id", 
        element: <Details/>,
      }, 
      {
        path:"anime/:id/watch-now", 
        element: <WatchNow/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
