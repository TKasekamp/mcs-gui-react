import React from 'react';
import PropTypes from 'prop-types';
import {myTimeFormat} from '../../logic/Time';

const PassStatus = (props) => {
    let valSpan = <span className="badge badge-default">Pass over</span>;
    let timeSpan = '';
    if (props.value === 'IN_FUTURE') {
        valSpan = <span className="badge badge-success">AOS in</span>;
        timeSpan = myTimeFormat(props.time);
    } else if (props.value === 'IN_RANGE') {
        valSpan = <span className="badge badge-danger">LOS in</span>;
        timeSpan = myTimeFormat(props.time);
    }
    return (
        <div>{valSpan} {timeSpan}</div>
    );
};
PassStatus.propTypes = {
    value: PropTypes.string.isRequired,
    time: PropTypes.number,
};

export default PassStatus;
