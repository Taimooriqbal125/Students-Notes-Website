import React from 'react'
import Header from "../header/header";
import Start from  "../start/Start"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from '../login/Login';
import Category from '../category/category';
import ShowNotes from '../showNotes/showNotes';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/shownotes",
        element: <ShowNotes/>,
      },
  ]);

function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}

export default Navigation;