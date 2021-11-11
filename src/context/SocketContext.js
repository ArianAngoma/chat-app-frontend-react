import {createContext, useContext, useEffect} from 'react';

/* Importaciones propias */
import {useSocket} from '../hooks/useSocket';
import {AuthContext} from '../auth/AuthContext';

export const SocketContext = createContext();

export const SocketProvider = ({children}) => {
    const {socket, online, connectSocket, disconnectSocket} = useSocket(process.env.REACT_APP_PATH_SOCKET_SERVER);

    const {auth} = useContext(AuthContext);

    /* Conectar socket si el usuario está logueado */
    useEffect(() => {
        if (auth.logged) connectSocket();
    }, [auth, connectSocket]);

    /* Desconectar socket si no hay usuario logueado */
    useEffect(() => {
        if (!auth.logged) disconnectSocket();
    }, [auth, disconnectSocket]);

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}