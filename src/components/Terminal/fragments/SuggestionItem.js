/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const SuggestionItem = (props) => {
    const params = props.parameters.map((p) => {
        return <span key={p.name}>
            <small className="text-muted mr-1">{p.name}:</small>
            {p.type}</span>;
    });
    return <div>
        <span className="badge badge-danger">{props.subsystems[0]}</span> {props.name}<span
        className="suggestionItem">( {params})</span>
    </div>;
};

SuggestionItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subsystems: PropTypes.arrayOf(PropTypes.string).isRequired,
    parameters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        default: PropTypes.any,
    })).isRequired
};

export default SuggestionItem;
