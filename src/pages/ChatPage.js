import {useContext} from 'react';

/* Importaciones propias */
import {InboxPeople} from '../components/chat/InboxPeople';
import {Messages} from '../components/chat/Messages';
import {ChatSelect} from '../components/chat/ChatSelect';
import {ChatContext} from '../context/chat/ChatContext';

import '../css/chat.css';

export const ChatPage = () => {
    const {chatState} = useContext(ChatContext);

    return (
        <div className="messaging">
            <div className="inbox_msg">
                <InboxPeople/>

                {
                    (chatState.chatActive)
                        ? <Messages/>
                        : <ChatSelect/>
                }
            </div>
        </div>
    )
}