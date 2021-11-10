/* Importaciones propias */
import {InboxPeople} from '../components/chat/InboxPeople';
import {Messages} from '../components/chat/Messages';
import {ChatSelect} from '../components/chat/ChatSelect';

import '../css/chat.css';

export const ChatPage = () => {
    return (
        <div className="messaging">
            <div className="inbox_msg">
                <InboxPeople/>

                {
                    (true)
                        ? <Messages/>
                        : <ChatSelect/>
                }
            </div>
        </div>
    )
}