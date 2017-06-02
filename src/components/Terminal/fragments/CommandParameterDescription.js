/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CommandParameterDescription = (props) => {
    return <div className="row">
        <div className="col-2">
            <small className="text-uppercase text-muted mr-2">name</small>
            {props.parameter.name}
        </div>
        <div className="col-2">
            <small className="text-uppercase text-muted mr-2">type</small>
            {props.parameter.type}
        </div>
        <div className="col-2">
            <small className="text-uppercase text-muted mr-2">default</small>
            {props.parameter.default}
        </div>
        <div className="col-6">
            <small className="text-uppercase text-muted mr-2">description</small>
            {props.parameter.description}
        </div>
    </div>;
};

CommandParameterDescription.propTypes = {
    parameter: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        default: PropTypes.any,
    }).isRequired
};

export default CommandParameterDescription;
