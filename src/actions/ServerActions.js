import jsonAjax from '../JSONAjaxRequest';
import {passesFailed, passesRetrieved} from './index';
import {commandFailed, commandSucceeded} from './CommandActions';
import {APIARY_ADDRESS, SERVER_URL} from '../constants';

export const getPasses = () => (dispatch) => {
    jsonAjax(
        APIARY_ADDRESS + '/ops/passes',
        'GET',
        null,
        (passes) => dispatch(passesRetrieved(passes)),
        ({error} = {}) => dispatch(passesFailed(error))
    );
};

export const submitCommand = ({localId, userId, command}) => (dispatch) => {
    jsonAjax(
        SERVER_URL + '/commands',
        'POST',
        {command, userId},
        ({id, status}) => dispatch(commandSucceeded({localId, id, status})),
        ({error} = {}) => dispatch(commandFailed({error}))
    );
};
