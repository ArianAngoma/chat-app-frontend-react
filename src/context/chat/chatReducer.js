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
        default:
            return state;
    }
}