import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//creating path using createBrowserRouter
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path :"/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        },

    ])

    //pass path to body through RouterProvider by react router dom
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
