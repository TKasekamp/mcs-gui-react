import {PASSES_REQUESTED} from '../actions/index';
import {getPasses} from '../actions/ServerActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
    [PASSES_REQUESTED]: getPasses
};

const serverMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default serverMiddleware;
