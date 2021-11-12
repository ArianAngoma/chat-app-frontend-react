import {createContext, useReducer} from 'react';

/* Importaciones propias */
import {chatReducer} from './chatReducer';

export const ChatContext = createContext();

/* Estado inicial del chatReducer */
const initialState = {
    uid: '',
    chatActive: null, // uid del usuario que quiero enviar mensajes
    users: [], // Todos los usuario de la DB
    messages: [] // El chat seleccionado
}

export const ChatProvider = ({children}) => {
    const [chatState, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{
            chatState, dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )
}