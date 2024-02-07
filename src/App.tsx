import React from 'react';
import './App.css';
import { createHashRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Home/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
