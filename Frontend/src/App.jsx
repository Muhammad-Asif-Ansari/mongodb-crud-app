import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './components/getUser/User'
import Add from './components/addUser/Add'
import Edit from './components/updateUser/Edit'
const App = () => {
  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
     {
      path:"/add",
      element:<Add/>,
    },
     {
      path:"/edit",
      element:<Edit/>,
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
