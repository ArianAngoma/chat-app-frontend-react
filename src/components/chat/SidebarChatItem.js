import {useContext} from 'react';
import {ChatContext} from '../../context/chat/ChatContext';
import {types} from '../../types/types';

export const SidebarChatItem = ({user}) => {
    /* Estado del chat */
    const {chatState, dispatch} = useContext(ChatContext);

    /* Función para activar chat */
    const handleActiveChat = () => {
        dispatch({
            type: types.chatSetActive,
            payload: user.uid
        })
    }

    return (
        <div className={`chat_list ${(user.uid === chatState.chatActive) && 'active_chat'}`}
             onClick={handleActiveChat}>
            <div className="chat_people">
                <div className="chat_img">
                    <img
                        src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
                        alt="avatar"/>
                </div>

                <div className="chat_ib">
                    <h5>{user.name}</h5>

                    {
                        (user.online)
                            ? (<span className="text-success">Online</span>)
                            : (<span className="text-danger">Offline</span>)
                    }
                </div>
            </div>
        </div>
    )
}