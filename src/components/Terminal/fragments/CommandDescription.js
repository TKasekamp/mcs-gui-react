/**
 * Created by Tõnis Kasekamp on 01.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CommandDescription = (props) => {
    const params = props.commandPrototype.parameters.map((p) => {
        return <div className="row" key={p.name}>
            <div className="col-2">
                <small className="text-uppercase text-muted mr-2">name :</small>
                {p.name}
            </div>
            <div className="col-2">
                <small className="text-uppercase text-muted mr-2">type :</small>
                {p.type}
            </div>
            <div className="col-2">
                <small className="text-uppercase text-muted mr-2">default :</small>
                {p.default}
            </div>
            <div className="col-6">
                <small className="text-uppercase text-muted mr-2">description :</small>
                {p.description}
            </div>
        </div>
    });
    const subs = props.commandPrototype.subsystems.map((s) => {
        return <span className="badge badge-danger mr-2" key={s}>{s}</span>;
    });
    return <div >
        <div className="row">
            <div className="col-6">
                <small className="text-uppercase text-muted mr-2">Description :</small>
                {props.commandPrototype.description}
            </div>
            <div className="col-2">
                <small className="text-uppercase text-muted mr-2">ID :</small>
                {props.commandPrototype.id}
            </div>
            <div className="col-4">
                <small className="text-uppercase text-muted mr-2">Subsystems :</small>
                {subs}
            </div>
        </div>
        {params}
    </div>
};

CommandDescription.propTypes = {
    commandPrototype: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
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