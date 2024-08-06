import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import AnimeListAll from './AnimeListAll.jsx';
import AnimeSingle from './AnimeSingle.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        // element: <AnimeListAll />,
        children: [
            {
                path: "",
                element: <AnimeListAll />,
            },
            {
                path: ":id",
                element: <AnimeSingle />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);


const Route = () => {
    return (
        <RouterProvider router={router} />
    )
};

export default Route;