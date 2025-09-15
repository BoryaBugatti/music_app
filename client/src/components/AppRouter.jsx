import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes, PublicRoutes } from "../routes";
const AppRouter = ()=>{
    const is_auth = false;
    return (
        <Routes>
            {is_auth && AuthRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>}></Route>
            )}
            {PublicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>}></Route>
            )}
        </Routes>
    );
}

export default AppRouter;