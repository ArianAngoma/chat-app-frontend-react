import {createContext, useCallback, useState} from 'react';

/* Importaciones propias */
import {fetchNoToken} from '../helpers/fetch';
import {LoginPage} from '../pages/LoginPage';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialState);

    const login = async (email, password) => {
        const resp = await fetchNoToken('auth', {email, password}, 'POST');
        console.log(resp);
    }

    const register = (name, email, password) => {

    }

    const checkToken = useCallback(() => {

    }, []);

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{
            login, register, checkToken, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}