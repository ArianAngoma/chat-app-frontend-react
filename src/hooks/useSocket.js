import {useCallback, useEffect, useState} from 'react';
import io from 'socket.io-client';

export const useSocket = (serverPath) => {
    /* Estado de socket */
    const [socket, setSocket] = useState(null);

    /* Función para conectar socket */
    const connectSocket = useCallback(() => {
        /* Obtener token para identificar al cliente conectado */
        const token = localStorage.getItem('token');

        const socketTemp = io.connect(serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'x-token': token
            }
        });
        setSocket(socketTemp);
    }, [serverPath]);

    /* Función para desconectar socket */
    const disconnectSocket = useCallback(() => {
        socket?.disconnect();
    }, [socket]);

    /* Estado para online */
    const [online, setOnline] = useState(false);

    /* Escuchar si el cliente se conecta */
    useEffect(() => {
        // console.log(socket);
        setOnline(socket?.connected)
    }, [socket]);

    /* Escuchar si se recupera la conexión */
    useEffect(() => {
        socket?.on('connect', () => [
            setOnline(true)
        ]);
    }, [socket]);

    /* Escuchar cuando perdemos la conexión */
    useEffect(() => {
        socket?.on('disconnect', () => [
            setOnline(false)
        ]);
    }, [socket]);


    return {socket, online, connectSocket, disconnectSocket};
}