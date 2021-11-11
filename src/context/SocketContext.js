import {createContext} from 'react';

/* Importaciones propias */
import {useSocket} from '../hooks/useSocket';

export const SocketContext = createContext();

export const SocketProvider = ({children}) => {
    const {socket, online} = useSocket(process.env.REACT_APP_PATH_SOCKET_SERVER);

    return (
        <SocketContext.Provider value={{socket, online}}>
            {children}
        </SocketContext.Provider>
    )
}