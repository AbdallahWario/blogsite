import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/Register';
import About from './pages/About';
import Posts from './pages/Posts/Posts';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/Home',
        element:<HomePage/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/register',
        element:<RegisterPage/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blog',
        element:<Posts/>
      },
      {
        path:'/Contact-Us',
        element:<Contact/>
      }
     
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
