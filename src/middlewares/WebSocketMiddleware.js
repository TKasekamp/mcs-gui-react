import {
    CONNECT_REQUESTED,
    connected,
    connectRefused,
    DISCONNECT_REQUESTED,
    messageReceived
} from '../actions/CommandActions';
import {connect} from '../WebSocket';

// Using WebSocket abstraction from basic websocket example
const webSocketMiddleware = (store) => (next) => {
    let connection = null;
    return (action) => {
        if (action.type === CONNECT_REQUESTED) {
            connection = connect({
                onOpen: () => store.dispatch(connected()),
                onClose: ({code, reason}) => store.dispatch(connectRefused({code, reason})),
                parameters: {command: action.payload.command, userId: action.payload.userId},
                onMessage: (message) => store.dispatch(messageReceived(message))
            });
        } else if (action.type === DISCONNECT_REQUESTED) {
            connection.close();
        }
        return next(action);
    };
};
export default webSocketMiddleware;
