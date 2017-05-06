import jsonAjax from '../JSONAjaxRequest';
import {passesFailed, passesRetrieved} from './index';
import {commandFailed, commandSucceeded} from './CommandActions';

const SERVER_ADDRESS = 'http://private-036b14-guiapi.apiary-mock.com';
const DEV_SERVER = 'http://localhost:8080';

export const getPasses = () => (dispatch) => {
    jsonAjax(
        SERVER_ADDRESS + '/ops/passes',
        'GET',
        null,
        (passes) => dispatch(passesRetrieved(passes)),
        ({error} = {}) => dispatch(passesFailed(error))
    );
};

export const submitCommand = ({id, command}) => (dispatch) => {
    jsonAjax(
        DEV_SERVER + '/commands',
        'POST',
        {command},
        ({id, status}) => dispatch(commandSucceeded({id, status})),
        ({error} = {}) => dispatch(commandFailed({error}))
    );
};
