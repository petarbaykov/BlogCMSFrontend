import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Article from "./pages/Article";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/posts/:id",
                element: <Article />
            }
        ]
    }
]);

export default router;