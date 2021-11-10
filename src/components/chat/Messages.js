/* Importaciones propias */
import {SendMessage} from './SendMessage';
import {IncomingMessage} from './IncomingMessage';
import {OutgoingMessage} from './OutgoingMessage';

export const Messages = () => {
    const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div className="mesgs">
            <div className="msg_history">
                {
                    messages.map(message => (
                        (message % 2)
                            ? <IncomingMessage key={message}/>
                            : <OutgoingMessage key={message}/>
                    ))
                }
            </div>

            <SendMessage/>
        </div>
    )
}