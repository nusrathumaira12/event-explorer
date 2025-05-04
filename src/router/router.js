import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/blog",
                Component: Blog
            }
        ]
    },
]);