import React from 'react';
import PropTypes from 'prop-types';
import TerminalForm from './TerminalForm';
import CommandList from './CommandList';

const commandPrototypes = [{
    id: 0,
    name: 'OBCS.ping',
    subsystems: ['OBCS', 'COM', 'EPS', 'CAM'],
    description: 'This does a ping',
    parameters: [{name: 'timeStamp', description: 'Time when ping was sent', type: 'uint32', default: 0}]
}];
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
                        <TerminalForm onSubmit={props.onSubmit} commandPrototypes={commandPrototypes}/></div>
                </div>
            </div>
        </div>
    );
};
TerminalCard.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        command: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
    })).isRequired
};

export default TerminalCard;
