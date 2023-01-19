import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Article from "./pages/Article";
import ArticleCreate from './pages/Articles/Create/Index';
import ArticleEdit from "./pages/Articles/Edit/Index";
import ArticlesList from "./pages/Articles/List/Index";

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
                path: "/posts",
                element: <ArticlesList />
            },
            {
                path: "/posts/create",
                element: <ArticleCreate />
            },
            {
                path: "/posts/edit/:id",
                element: <ArticleEdit />
            },
            {
                path: "/posts/:id",
                element: <Article />
            },

        ]
    }
]);

export default router;