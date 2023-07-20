/*
 * @Author: Hector Jiang
 * @Date: 2023-07-16 12:26:32
 * @LastEditTime: 2023-07-20 09:20:11
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Todo from "./pages/Todo/Todo"
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/todo",
        element: <Todo />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();