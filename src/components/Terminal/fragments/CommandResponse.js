/**
 * Created by Tõnis Kasekamp on 31.05.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, {registerLanguage} from 'react-syntax-highlighter/dist/light';
import python from 'react-syntax-highlighter/dist/languages/python';
import xcode from 'react-syntax-highlighter/dist/styles/xcode';

registerLanguage('python', python);

const CommandResponse = (props) => {
    const rTime = typeof props.responseTime !== 'undefined' ? props.responseTime : '';

    const message = props.responseString !== '' ? props.responseString : 'Waiting for response...';

    return <div className="row">
        <div className="col-8">
            <SyntaxHighlighter language='python' style={xcode} customStyle={{marginBottom: '0', padding: '0'}}>{message}</SyntaxHighlighter>
        </div>

        <div className="col-4">
            <small className="text-muted text-uppercase mr-1">Response time</small>
            <small>{rTime}</small>
        </div>
    </div>
};

CommandResponse.propTypes = {
    responseString: PropTypes.string,
    responseTime: PropTypes.string,
};

export default CommandResponse;