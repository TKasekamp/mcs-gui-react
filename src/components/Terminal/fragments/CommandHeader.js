/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, {registerLanguage} from 'react-syntax-highlighter/dist/light';
import python from 'react-syntax-highlighter/dist/languages/python';
import xcode from 'react-syntax-highlighter/dist/styles/xcode';

registerLanguage('python', python);

const CommandHeader = (props) => {
    return <div className="row">
        <div className="col-6">
            <SyntaxHighlighter language='python' style={xcode} customStyle={{marginBottom: '0', padding: '0'}}>{props.commandString}</SyntaxHighlighter></div>
        <div className="col-2">
            <small className="text-muted text-uppercase mr-1">Status</small>
            <small>{props.status}</small>
        </div>
        <div className="col-3">
            <small className="text-muted text-uppercase mr-1">Submit time</small>
            <small>{props.submitTime}</small>
        </div>
        <div className="col-1" style={{padding: 'initial'}}>
            <label className="switch switch-default switch-primary-outline-alt mb-0">
                <input type="checkbox" className="switch-input" value={props.collapsed}
                       onChange={props.switchCollapsed}/>
                <span className="switch-label"/>
                <span className="switch-handle"/>
            </label>
        </div>
    </div>
};

CommandHeader.propTypes = {
    commandString: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    submitTime: PropTypes.string,
    collapsed: PropTypes.bool.isRequired,
    switchCollapsed: PropTypes.func.isRequired
};

export default CommandHeader;