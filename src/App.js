import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AddUser from "./AddUser";
import Update from "./Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/users/add",
      element: <AddUser></AddUser>,
    },
    {
      path: "/update",
      element: <Update></Update>,
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
