/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {getBadgeClass} from '../../../logic/Terminal';

const SuggestionItem = (props) => {
    const badge = getBadgeClass(props.subsystem);

    const params = props.parameters.map((p) => {
        return <span key={p.name}>
            <small className="text-muted mr-1">{p.name}:</small>
            {p.type}</span>;
    });
    return <div>
        <span className={'badge ' + badge}>{props.subsystem}</span> {props.name}<span
        className="suggestionItem">( {params})</span>
    </div>;
};

SuggestionItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subsystem: PropTypes.string.isRequired,
    parameters: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        default: PropTypes.any,
    })).isRequired
};

export default SuggestionItem;
