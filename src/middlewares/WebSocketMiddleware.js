import {
    commandUpdate,
    CONNECT_REQUESTED,
    connected,
    connectRefused,
    DISCONNECT_REQUESTED, MESSAGE_RECEIVED,
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
                parameters: {},
                onMessage: (message) => store.dispatch(messageReceived(message))
            });
        } else if (action.type === DISCONNECT_REQUESTED) {
            connection.close();
        } else if (action.type === MESSAGE_RECEIVED) {
            switch(action.payload.type) {
                case 'COMMAND': {
                    store.dispatch(commandUpdate(action.payload.object));
                    break;
                }
                default:
                    return;
            }
        }

        return next(action);
    };
};
export default webSocketMiddleware;
