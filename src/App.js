import React, {useEffect} from 'react';
import './styles/App.css';
import AppRouter from "./componets/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = React.useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <AppRouter/>
        </AuthContext.Provider>
    );
}

export default App;
