import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import ReactDOM from 'react-dom/client';
import React from "react";



const router= createBrowserRouter([
  {
    path:"/",
    element:<App />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
