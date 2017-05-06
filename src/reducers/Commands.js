import {
    COMMAND_SUBMITTED, COMMAND_SUCCEEDED,
    CONNECT_REFUSED, CONNECT_REQUESTED, CONNECTED, DISCONNECT_REQUESTED,
    MESSAGE_RECEIVED
} from '../actions/CommandActions';

const initialState = {
    connected: false,
    userId: '',
    commands: [{
        id: 'asdasfafafdfsdasfafafa',
        command: 'blow up',
        userId: 'sdfdfsfgggrvdfvervr',
        status: 'completed',
        result: 'it blew up'
    }],
    message: ''
};
export const IN_FLIGHT = 'In Flight';
/*export const ACCEPTED = 'created';
export const FAILED = 'failed';*/

const commands = (state = initialState, action) => {
    switch (action.type) {
        case COMMAND_SUBMITTED:
            return {
                ...state,
                commands: state.commands.concat({
                    id: action.payload.localId,
                    command: action.payload.command,
                    status: IN_FLIGHT,
                    userId: action.payload.userId,
                    result: ''
                })
            };

        case COMMAND_SUCCEEDED: {
            const commands = state.commands.map((command) => {
                if (command.id === action.payload.localId) {
                    return {
                        ...command,
                        id: action.payload.id,
                        status: action.payload.status
                    };
                } else {
                    return command;
                }
            });

            return {...state, commands};
        }

        case CONNECT_REQUESTED:
            return {
                ...state,
                message: 'Connecting...'
            };

        case CONNECTED:
            return {
                ...state,
                message: ''
            };
        case CONNECT_REFUSED:
            // Something here
            return state;

        case MESSAGE_RECEIVED:
            return {...state, commands: state.commands.concat(action.payload)};

        case DISCONNECT_REQUESTED:
            return {
                connected: false,
                userId: '',
                commands: [],
                message: ''
            };
        default:
            return state;
    }
};

export default commands;
