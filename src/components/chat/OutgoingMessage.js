/* Importaciones propias */
import {hourMonth} from '../../helpers/hour-month';

export const OutgoingMessage = ({message}) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{message.message}</p>
                <span className="time_date">{hourMonth(message.createdAt)}</span>
            </div>
        </div>
    )
}