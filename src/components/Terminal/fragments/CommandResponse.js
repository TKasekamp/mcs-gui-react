/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {prototypeIds} from '../../../constants';
import PingResponse from '../responses/PingResponse';
import DefaultResponse from '../responses/DefaultResponse';

const responseSwitch = (prototypeId, body) => {
    switch (prototypeId) {
        case prototypeIds.ping:
            return <PingResponse body={body}/>;
        default:
            return <DefaultResponse body={body}/>;
    }
};

const CommandResponse = (props) => {
    const rTime = typeof props.response.responseTime !== 'undefined' ? props.response.responseTime : '';

    const message = typeof props.response.body !== 'undefined'
        ? responseSwitch(props.prototypeId, props.response.body) : 'Waiting for response...';

    return <div className="row">
        <div className="col-8">
            {message}
        </div>

        <div className="col-4">
            <small className="text-muted text-uppercase mr-1">Response time</small>
            <small>{rTime}</small>
        </div>
    </div>;
};

CommandResponse.propTypes = {
    response: PropTypes.shape({
        body: PropTypes.object,
        responseTime: PropTypes.string,
    }).isRequired,
    prototypeId: PropTypes.number,
};

export default CommandResponse;
