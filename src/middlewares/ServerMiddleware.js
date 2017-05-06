import {PASSES_REQUESTED} from '../actions/index';
import {getPasses, submitCommand} from '../actions/ServerActions';
import {COMMAND_SUBMITTED} from '../actions/CommandActions';

const ACTION_TYPE_TO_SERVER_ACTION = {
    [PASSES_REQUESTED]: getPasses,
    [COMMAND_SUBMITTED]: submitCommand
};

const serverMiddleware = (store) => (next) => (action) => {
    const serverAction = ACTION_TYPE_TO_SERVER_ACTION[action.type];
    if (serverAction) {
        serverAction(action.payload)(store.dispatch);
    }
    return next(action);
};

export default serverMiddleware;
