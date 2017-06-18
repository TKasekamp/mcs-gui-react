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
    const rTime = typeof props.responseTime !== 'undefined' ? props.responseTime : '';

    const message = typeof props.body !== 'undefined'
      ? responseSwitch(props.prototypeId, props.body) : 'Waiting for response...';

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
    body: PropTypes.object,
    prototypeId: PropTypes.number.isRequired,
    responseTime: PropTypes.string,
};

export default CommandResponse;
