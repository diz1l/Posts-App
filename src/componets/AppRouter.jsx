import React, {useContext} from 'react';
import Header from "../UI/Header/Header";
import {Route, Routes,Navigate} from "react-router-dom";
import {privatRoutes, publicRoutes} from "../router/routsJS";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);

    return (
        <div>
            {isAuth && <Header/>}
            {isAuth
                ? <Routes>
                    {privatRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component}/>
                    ))}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                : <Routes>
                    {publicRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.component}/>
                    ))}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            }
        </div>
    );
};

export default AppRouter;