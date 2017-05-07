import React from 'react';
import PropTypes from 'prop-types';
import {calculateDuration, myDayFormat, myTimeFormat} from '../../logic/Time';

const Pass = (props) => {
    const passDate = myDayFormat(props.aos);
    const aosTime = myTimeFormat(props.aos);
    const losTime = myTimeFormat(props.los);
    const duration = myTimeFormat(calculateDuration(props.aos, props.los));

    return (
        <tr>
            <td>{passDate}</td>
            <td>{aosTime}</td>
            <td>{losTime}</td>
            <td>{duration}</td>
            <td>{props.maxElevation}°</td>
            <td>{props.groundStation}</td>
        </tr>
    );
};
Pass.propTypes = {
    id: PropTypes.string.isRequired,
    aos: PropTypes.number.isRequired,
    los: PropTypes.number.isRequired,
    maxElevation: PropTypes.number.isRequired,
    groundStation: PropTypes.string.isRequired,
};

export default Pass;
