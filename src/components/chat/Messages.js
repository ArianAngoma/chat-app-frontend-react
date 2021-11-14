import {useContext} from 'react';

/* Importaciones propias */
import {SendMessage} from './SendMessage';
import {IncomingMessage} from './IncomingMessage';
import {OutgoingMessage} from './OutgoingMessage';
import {ChatContext} from '../../context/chat/ChatContext';
import {AuthContext} from '../../auth/AuthContext';

export const Messages = () => {
    const {chatState} = useContext(ChatContext);
    const {auth} = useContext(AuthContext);

    return (
        <div className="mesgs">
            <div className="msg_history"
                 id="messages">
                {
                    chatState.messages.map(message => (
                        (message.to === auth.uid)
                            ? <IncomingMessage key={message._id} message={message}/>
                            : <OutgoingMessage key={message._id} message={message}/>
                    ))
                }
            </div>

            <SendMessage/>
        </div>
    )
}