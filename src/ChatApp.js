import moment from 'moment';
import 'moment/locale/es';

/* Importaciones propias */
import {AppRouter} from './router/AppRouter';
import {AuthProvider} from './auth/AuthContext';
import {SocketProvider} from './context/SocketContext';
import {ChatProvider} from './context/chat/ChatContext';

/* Configuración del idioma de moment */
moment.locale('es');

export const ChatApp = () => {
    return (
        <ChatProvider>
            <AuthProvider>
                <SocketProvider>
                    <AppRouter/>
                </SocketProvider>
            </AuthProvider>
        </ChatProvider>
    )
}