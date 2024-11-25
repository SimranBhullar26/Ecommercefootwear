//import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {

   const router=createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children:[
        {path:"/signnin",element:<SignIn/>},
        {path:"/signup",element:<SignUp/>},
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router} /></>
  );
}

export default App;
