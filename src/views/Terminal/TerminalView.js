import React, {Component} from 'react';
import TerminalCard from '../../components/Terminal/TerminalCard';
import {connect} from 'react-redux';
import {commandSubmitted, connectRequested} from '../../actions/CommandActions';
import PropTypes from 'prop-types';

class TerminalView extends Component {
    componentDidMount() {
        // Get only if empty
        // TODO move this check to somewhere else
        if (!this.props.connected) {
            this.props.onConnect();
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <TerminalCard commands={this.props.commands} onSubmit={this.props.onSubmit}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                TERMINAL README
                            </div>
                            <div className="card-block">
                                <div className="alert alert-danger" role="alert">
                                    <strong>Warning</strong> Due to Heroku limitations, the Websocket connection will
                                    time out in 55 seconds of last usage. So don't wait too long to think of a command
                                    :)
                                </div>
                                <p>This is a prototype of the command terminal. It is based on the ESTCube-1 commands
                                    and their syntax.</p>
                                <p>The commands are sent to a dummy server that will respond via Websocket when response
                                    has been received. The time delays are deliberate and done with
                                    <code>Thread.sleep(3000)</code>
                                </p>
                                <h3>Features</h3>
                                <p>All form inputs work</p>
                                <p>Start typing the start of the command. Select command with <kbd>up and down</kbd>
                                    keys. Press <kbd>Enter</kbd> to confirm selection. Press <kbd>Enter</kbd> to send
                                    command to server.The command
                                    terminal features three commands with autocomplete. </p>
                                <ul>
                                    <li>ping</li>
                                    <li>pong</li>
                                    <li>ifimg</li>
                                    <li>setreel - restricted command</li>
                                </ul>
                                <p>Special feature! Submit command <code>a</code> to bypass the normal
                                    <code>Thread.sleep</code>
                                    times. This is the maximum performance of the current GUI and server combo</p>
                                <p>Description text when selecting one of the above commands</p>
                                <p>Expand command response with the switch at the side. All other metadata will be
                                    hidden away like that.</p>
                                <p>The autocomplete will populate the input with default values if they are present</p>
                                <p>Card color change when command status changes</p>
                                <p>Terminal scroll to bottom when there are too many commands</p>
                                <p>Python syntax highlihting, done with <a
                                    href="https://www.npmjs.com/package/react-syntax-highlighter">
                                    react-syntax-highlighter</a>,
                                    style xcode.
                                </p>
                                <p>Restricted command warning</p>
                                <p>Commands colored by subsystem</p>
                                <h3>Possible improvements</h3>
                                <p>The autocomplete regex only searches at start of string. Probably need to search all.
                                    Maybe even description, parameter names?</p>
                                <p>The CSS is basic. The labels are too grey and there's too much white space.</p>
                                <p>If the subsystems can agree upon colors, the commands can be highlighted like <span
                                    className="badge badge-default">AOCS</span>
                                    <span className="badge badge-primary">COM</span>
                                    <span className="badge badge-success">EPS</span>
                                    <span className="badge badge-info">CAM</span>
                                    <span className="badge badge-warning">ST</span>
                                    <span className="badge badge-danger">OBCS</span></p>
                                <p>A setting can be added to enable or disable the command description helper text. This
                                    is because an experienced operator would remember them all and then the text would
                                    be just clutter.</p>
                                <p>Calculate command latency by doing responseTime - submitTime?</p>
                                <br/>
                                <p>OBCS schedule parameter could be added to the end of the command string, after an
                                    @</p>
                                <p>Able to copy multiple commands-responses without selecting unnecessary HTML</p>
                                <p>Confirmation button for dangerous commands. Ability to override this extra step.</p>
                                <p>Lock terminal for one user for a period of time. Probably a countdown button with
                                    period of 5-10-15 minutes? No other user can send commands at that time.</p>
                                <p>Simplified version of the terminal that could be used on every page. </p>
                                <p>Scroll up-down in input to select previously used commands</p>
                                <p>Previously used commands available in autocomplete. Requires a way to switch between
                                    normal and previously used autocomplete to avoid clutter.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

TerminalView.propTypes = {
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        responseString: PropTypes.string
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
    connected: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    commands: state.commands.commands,
    connected: state.commands.connected
});

const mapDispatchToProps = (dispatch) => ({
    onConnect: () => dispatch(connectRequested()),
    onSubmit: (obj) => dispatch(commandSubmitted(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TerminalView);
