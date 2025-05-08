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
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Reviews from "../pages/Reviews/Reviews";
import TechEvents from "../pages/TechEvents/TechEvents";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";





export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                Component: Home,
                loader: ()=>fetch("/data.json"),
                hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>
            },
            {
                path: "/about",
                Component: About
            },
            {
                path: "/myProfile",
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
           
            {
                path: "/reviews",
                element: <PrivateRoute>
                    <Reviews></Reviews>
                </PrivateRoute>
            },
           
           
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/forget-password",
                Component: ForgetPassword
            },

            {
                path: "/register",
                Component: Register
            },
            {
                path:  "/eventdetails/:id",
               element: <PrivateRoute>
                <EventDetails></EventDetails>
               </PrivateRoute>,
                loader: ()=>fetch("/data.json"),
                hydrateFallbackElement: <div className="text-xl font-bold mx-auto justify-center">Loading.......</div>

            },
            {
                path:"/reservedSeats",
               Component: ReservedSeats
            },
            {
                path: "/techEvents",
                Component: TechEvents
            }

        ]
    },
]);