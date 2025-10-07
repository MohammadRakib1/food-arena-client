import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Home/Shared/Secret/Secret";
import Deshboard from "../Layout/Deshboard";
import Cart from "../pages/Deshboard/Cart/Cart";
import AllUsers from "../pages/Deshboard/Cart/AllUsers/AllUsers";
import AddItem from "../pages/Deshboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Deshboard/ManageItem/ManageItem";
import UpdateItem from "../pages/Deshboard/UpdateItem/UpdateItem";
import Payment from "../pages/Deshboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'secret',
                element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
            }
        ]
    },
    {
        path: 'deshboard',
        element: <PrivateRoutes><Deshboard></Deshboard></PrivateRoutes>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);