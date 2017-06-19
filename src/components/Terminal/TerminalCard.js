import React from 'react';
import PropTypes from 'prop-types';
import TerminalForm from './TerminalForm';
import CommandList from './CommandList';

const TerminalCard = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <i className="fa fa-align-justify"/> Command terminal
            </div>
            <div className="card-block">
                <div className="row">
                    <div className="col-sm-12">
                        <CommandList commands={props.commands}/>
                    </div>
                    <div className="col-sm-12">
                        <TerminalForm onSubmit={props.onSubmit} commandPrototypes={props.commandPrototypes}/></div>
                </div>
            </div>
        </div>
    );
};
TerminalCard.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string
    })).isRequired,
    commandPrototypes: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
};

export default TerminalCard;
