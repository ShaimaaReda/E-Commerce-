import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './component/Layout'
import Login from './pages/Login'

function App() {
  const router = createBrowserRouter([
    { path:"/", 
      element :<Layout/> ,

      children:[
      {path:"/", element:<Home/>},
      {path:"/login", element:<Login/>},

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
