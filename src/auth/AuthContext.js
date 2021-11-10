import {createContext, useCallback, useState} from 'react';

/* Importaciones propias */
import {fetchNoToken} from '../helpers/fetch';

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
        // console.log(resp);
        if (resp.ok) {
            const {user} = resp;
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: user.uid,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email
            });
        }

        return resp.ok;
    }

    const register = async (name, email, password) => {
        const resp = await fetchNoToken('auth/register', {name, email, password}, 'POST');
        if (resp.ok) {
            const {user} = resp;
            localStorage.setItem('token', resp.token);
            setAuth({
                uid: user.uid,
                checking: false,
                logged: true,
                name: user.name,
                email: user.email
            });

            return true;
        }

        for (const error in resp.errors) {
            return resp.errors[error].msg
        }
    }

    const checkToken = useCallback(() => {

    }, []);

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{
            login, register, checkToken, logout, auth
        }}>
            {children}
        </AuthContext.Provider>
    )
}