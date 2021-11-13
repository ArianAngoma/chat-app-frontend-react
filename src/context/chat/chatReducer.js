/* Importaciones propias */
import {types} from '../../types/types';

export const chatReducer = (state, action) => {
    switch (action.type) {
        /* Guardar usuario en el state */
        case types.usersLoaded:
            return {
                ...state,
                users: [...action.payload]
            }
        /* Activar chat */
        case types.chatSetActive:
            /* Retornar el mismo estado si se desea activar otra vez el mismo chat */
            if (state.chatActive === action.payload) return state;

            return {
                ...state,
                chatActive: action.payload,
                messages: []
            }
        /* Guardar mensaje nuevo */
        case types.chatNewMessage:
            /* Si tenemos el chat activo de la persona que nos envió el mensaje debe de guardese en el state de messages */
            if (state.chatActive === action.payload.from || state.chatActive === action.payload.to) {
                return {
                    ...state,
                    messages: [...state.messages, action.payload]
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}