import React from 'react';
import PropTypes from 'prop-types';

const Pass = (props) => {
    return (
        <tr>
            <td>{props.aos}</td>
            <td>{props.los}</td>
            <td>{props.maxElevation}</td>
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
