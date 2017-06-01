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

export const submitCommand = ({localId, userId, commandString, obcsSchedule, mcsSchedule, priority}) => (dispatch) => {
    jsonAjax(
        SERVER_URL + '/commands',
        'POST',
        {commandString, userId, obcsSchedule, mcsSchedule, priority},
        (obj) => dispatch(commandSucceeded({localId, obj})),
        ({error} = {}) => dispatch(commandFailed({error}))
    );
};
