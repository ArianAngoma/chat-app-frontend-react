import {useContext} from 'react';

/* Importaciones propias */
import {SidebarChatItem} from './SidebarChatItem';
import {ChatContext} from '../../context/chat/ChatContext';
import {AuthContext} from '../../auth/AuthContext';

export const Sidebar = () => {
    const {chatState} = useContext(ChatContext);

    /* Obtener los datos del usuario logueado */
    const {auth} = useContext(AuthContext);

    const {uid} = auth;

    return (
        <div className="inbox_chat">
            {
                chatState.users
                    /* Filtrar todos los usuario, excepto el logueado */
                    .filter(user => user.uid !== uid)
                    .map(user => (
                        <SidebarChatItem key={user.uid}
                                         user={user}/>
                    ))
            }

            {/* Espacio extra para el scroll */}
            <div className="extra_space"/>
        </div>
    )
}