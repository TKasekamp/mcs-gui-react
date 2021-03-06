/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import CommandParameterDescription from './CommandParameterDescription';
import {getBadgeClass} from '../../../logic/Terminal';

const CommandDescription = (props) => {
    const params = props.commandPrototype.parameters.map((p) => {
        return <CommandParameterDescription key={p.name} parameter={p}/>;
    });
    const subs = props.commandPrototype.subsystems.map((s) => {
        const badgeClass = getBadgeClass(s);
        return <span className={'badge mr-2 ' + badgeClass} key={s}>{s}</span>;
    });
    const restrict = props.commandPrototype.restricted ?
        <div className="col-12 bg-danger text-white">This command is restricted!</div> : '';
    return <div >
        <div className="row">
            {restrict}
            <div className="col-6">
                <small className="text-uppercase text-muted mr-2">Description</small>
                {props.commandPrototype.description}
            </div>
            <div className="col-2">
                <small className="text-uppercase text-muted mr-2">ID</small>
                {props.commandPrototype.id}
            </div>
            <div className="col-4">
                <small className="text-uppercase text-muted mr-2">Subsystems</small>
                {subs}
            </div>
        </div>
        {params}
    </div>;
};

CommandDescription.propTypes = {
    commandPrototype: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        restricted: PropTypes.bool.isRequired,
        subsystems: PropTypes.arrayOf(PropTypes.string).isRequired,
        parameters: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            default: PropTypes.any,
        })).isRequired
    }).isRequired
};

export default CommandDescription;
