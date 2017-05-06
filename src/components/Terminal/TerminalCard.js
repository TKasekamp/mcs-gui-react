import React from 'react';
import PropTypes from 'prop-types';
import TerminalForm from './TerminalForm';
import CommandItemList from './CommandItemList';

const TerminalCard = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <i className="fa fa-align-justify"/> Command terminal
            </div>
            <div className="card-block">
                <div className="row">
                    <div className="col-sm-6">
                        <TerminalForm onSubmit={props.onSubmit}/></div>
                    <div className="col-sm-6">
                        <CommandItemList commands={props.commands}/>
                    </div>
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
