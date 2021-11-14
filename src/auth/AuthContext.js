import {createContext, useCallback, useContext, useState} from 'react';

/* Importaciones propias */
import {fetchNoToken, fetchWithToken} from '../helpers/fetch';
import {ChatContext} from '../context/chat/ChatContext';
import {types} from '../types/types';

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}

export const AuthProvider = ({children}) => {
    const {dispatch} = useContext(ChatContext);

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

    const checkToken = useCallback(async () => {
        const token = localStorage.getItem('token');

        /* Si el token no existe */
        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null
            });

            return false;
        }

        const resp = await fetchWithToken('auth/renew');
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
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null
            });

            return false;
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');

        /* Limpiar store del chat */
        dispatch({
            type: types.chatClearStateLogout
        });

        setAuth({
            checking: false,
            logged: false,
        });
    }

    return (
        <AuthContext.Provider value={{
            login, register, checkToken, logout, auth
        }}>
            {children}
        </AuthContext.Provider>
    )
}