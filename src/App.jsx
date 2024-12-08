import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './component/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './component/ProtectedRoute'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter([
    { path:"/", 
    element:(
    // <ProtectedRoute> <Layout/> </ProtectedRoute>
      <Layout/> 

    ),
      children:[
      {path:"/home", element:<Home/>},
      {path:"/login", element:<Login/>},
      {path:"/register", element:<Register/>},
      {path:"/product", element:<Product/>},
      {path:"/notFound", element:<NotFound/>},
      ],
    },
    // {
    //   path:"/", 
    //   element:(
    //     <GuestRoute>
    //       <Layout/>
    //     </GuestRoute>
    //   ),
    //   children:[
    //     {path:"/login", element:<Login/>},
    //     {path:"/register", element:<Register/>},
    //     {path:"/product", element:<Product/>},
    //   ]
    // }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
