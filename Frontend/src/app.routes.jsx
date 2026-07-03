import {createBrowserRouter} from "react-router";
import Home from "../src/features/auth/pages/Home.jsx";
import Register from "../src/features/auth/pages/Register.jsx";
import Login from "../src/features/auth/pages/Login.jsx";
import Analyzer from "./features/codereview/pages/Code_Analyzer.jsx";
import Result from "./features/codereview/pages/ShowCodeReview.jsx";
export const router = createBrowserRouter([
    {
        path: "/", element:<Home/>
    },
    {
        path: "/register", element:<Register/>
    },
    {
        path: "/login", element: <Login/>
    },
    {
        path: "/analysis", element: <Analyzer/>
    },
    {
        path: "/showresult",element: <Result/>
    }

    
]);