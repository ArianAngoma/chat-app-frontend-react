import {createContext, useContext, useEffect} from 'react';

/* Importaciones propias */
import {useSocket} from '../hooks/useSocket';
import {AuthContext} from '../auth/AuthContext';
import {ChatContext} from './chat/ChatContext';
import {types} from '../types/types';

export const SocketContext = createContext();

export const SocketProvider = ({children}) => {
    const {socket, online, connectSocket, disconnectSocket} = useSocket(process.env.REACT_APP_PATH_SOCKET_SERVER);

    const {auth} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);

    /* Conectar socket si el usuario está logueado */
    useEffect(() => {
        if (auth.logged) connectSocket();
    }, [auth, connectSocket]);

    /* Desconectar socket si no hay usuario logueado */
    useEffect(() => {
        if (!auth.logged) disconnectSocket();
    }, [auth, disconnectSocket]);

    /* Escuchar cambios de los usuario conectados */
    useEffect(() => {
        socket?.on('users-list', (users) => {
            // console.log(users);
            dispatch({
                type: types.usersLoaded,
                payload: users
            });
        });
    }, [socket, dispatch]);

    useEffect(() => {
        socket?.on('message-personal', (message) => {
            console.log(message);
        });
    }, [socket]);

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}