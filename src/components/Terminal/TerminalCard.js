import React from 'react';
import PropTypes from 'prop-types';
import TerminalForm from './TerminalForm';
import CommandList from './CommandList';

const commandPrototypes = [{
    id: 0,
    name: 'ping',
    subsystems: ['OBCS', 'COM', 'EPS', 'CAM'],
    description: 'This does a ping',
    parameters: [{name: 'timeStamp', description: 'Time when ping was sent', type: 'uint32', default: 0}]
},
    {
        id: 1,
        name: 'pong',
        subsystems: ['OBCS', 'COM', 'EPS', 'CAM'],
        description: 'This does a pong',
        parameters: [{name: 'timeStamp', description: 'Time when pong was sent', type: 'uint32', default: 0}]
    },
    {
        id: 16,
        name: 'ifimg',
        subsystems: ['OBCS', 'CAM'],
        description: 'Initializes the storage of a firmware image.',
        parameters: [{name: 'slot', description: 'Firmware image slot', type: 'uint8'},
            {name: 'size', description: 'Length of the firmware image, in bytes', type: 'uint32'},
            {name: 'version', description: 'Firmware image version identifier', type: 'uint32'},
            {name: 'crc', description: 'Firmware image checksum', type: 'uint32'}
        ]
    }
];
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
        commandString: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string
    })).isRequired
};

export default TerminalCard;
