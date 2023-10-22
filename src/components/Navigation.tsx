import {  Route, Routes } from "react-router-dom";
import Home from "./Home";

const routes = [
    { path: "/",  name: "Home", component: Home}
];

function Navigation(){
    return(
        <Routes>
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                Component={route.component}
                 />
            ))}
            
        </Routes>
    );
};

export default Navigation;