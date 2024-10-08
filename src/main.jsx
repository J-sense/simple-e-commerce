import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Cart from './components/Cart'
import handlesavedcart from './components/Loader/ProductsCArdData'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import toast, { Toaster } from 'react-hot-toast';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage />,
      loader : handlesavedcart,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/about",
            element:<About></About>,
        },
        {
            path:"/shop",
            element:<Shop></Shop>,
            loader:()=>fetch('products.json')
        },
        {
            path:"/cart",
            element:<Cart></Cart>,
            loader : handlesavedcart
        },
       
      ]
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Toaster />
<RouterProvider router={router}></RouterProvider>

  </>
)
