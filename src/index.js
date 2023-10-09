import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import NavigationBar from './routes/navigation/navigation.component.jsx';
// import Home from './routes/home/home.component.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const router = createBrowserRouter([
//   {
//     path: "/", // 首頁
//     element: <NavigationBar />,
//     children: [
//       {
//         path: "/home", // 功能頁面
//         element: <Home />
//       }
//     ]
//   }, 
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


// reportWebVitals();
