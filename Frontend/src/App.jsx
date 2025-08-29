import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './components/getUser/User'
const App = () => {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
     {
      path:"/add",
      element:"User add Page",
    },
     {
      path:"/edit",
      element:"Update User Page",
    },
     {
      path:"/delete",
      element:"Delete Page",
    }
  ])
  return (
    <div>
      <RouterProvider
      router = {route}>
      </RouterProvider>
    </div>
  )
}

export default App
