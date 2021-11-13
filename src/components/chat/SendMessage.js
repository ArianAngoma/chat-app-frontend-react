import {useState} from 'react';

export const SendMessage = () => {
    const [message, setMessage] = useState('');

    const handleChange = ({target}) => {
        setMessage(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validar si el campo de mensaje está vacio */
        if (!message.length) return null;

        /* Limpiar formulario */
        setMessage('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input type="text" className="write_msg" placeholder="Mensaje..."
                           name={message}
                           value={message}
                           onChange={handleChange}/>
                </div>

                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}