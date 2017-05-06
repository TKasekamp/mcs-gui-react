import {createPayloadForwardingAction} from './index';

let commandId = 0;
// CONNECT
export const CONNECT_REQUESTED = 'CONNECT_REQUESTED';
export const connectRequested = (obj) => (
    {
        type: CONNECT_REQUESTED,
        payload: {
            command: obj.command,
            userId: 'Me, Mario'
        }
    }
);

export const CONNECT_REFUSED = 'CONNECT_REFUSED';
export const connectRefused = createPayloadForwardingAction(CONNECT_REFUSED);

export const CONNECTED = 'CONNECTED';
export const connected = createPayloadForwardingAction(CONNECTED);

// DISCONNECT
export const DISCONNECT_REQUESTED = 'DISCONNECT_REQUESTED';
export const disconnectRequested = createPayloadForwardingAction(DISCONNECT_REQUESTED);

// MESSAGE
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const messageReceived = createPayloadForwardingAction(MESSAGE_RECEIVED);

// COMMAND POST
export const COMMAND_SUBMITTED = 'COMMAND_SUBMITTED';
export const commandSubmitted = (command) => (
    {
        type: COMMAND_SUBMITTED,
        payload: {
            command: command,
            id: (commandId++).toString(),
            userId: 'test-value'
        }
    }
);

export const COMMAND_SUCCEEDED = 'COMMAND_SUCCEEDED';
export const commandSucceeded = createPayloadForwardingAction(COMMAND_SUCCEEDED);

export const COMMAND_FAILED = 'COMMAND_FAILED';
export const commandFailed = createPayloadForwardingAction(COMMAND_FAILED);
