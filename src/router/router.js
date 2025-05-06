import {
    createBrowserRouter,
} from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProfile from "../pages/MyProfile/MyProfile";
import EventDetails from "../pages/EventDetails/EventDetails";
import ReservedSeats from "../pages/ReservedSeats/ReservedSeats";

import Reviews from "../pages/Reviews/Reviews";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                Component: Home,
                loader: ()=>fetch("/data.json")
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/myProfile",
                Component: MyProfile
            },
            {
                path: "/reviews",
                Component: Reviews
            },
           
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path:  "/eventdetails/:id",
                Component: EventDetails,
                loader: ()=>fetch("/data.json"),

            },
            {
                path:"/reservedSeats",
               Component: ReservedSeats
            }

        ]
    },
]);