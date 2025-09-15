import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import Reg from "./Pages/Reg";
import Home from "./Pages/MainPage";
import { ADMIN_ROUTE, REG_ROUTE, AUTH_ROUTE, MAIN_PAGE } from "./utils/consts";
import { Component } from "react";
export const AuthRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const PublicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Reg
    },
    {
        path: MAIN_PAGE,
        Component: Home
    }
]