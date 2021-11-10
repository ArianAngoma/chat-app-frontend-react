/* Importaciones propias */
import {SidebarChatItem} from './SidebarChatItem';

export const Sidebar = () => {
    const chats = [1, 2, 3, 4, 5];

    return (
        <div className="inbox_chat">
            {
                chats.map(chat => (
                    <SidebarChatItem key={chat}/>
                ))
            }

            {/* Espacio extra para el scroll */}
            <div className="extra_space"/>
        </div>
    )
}