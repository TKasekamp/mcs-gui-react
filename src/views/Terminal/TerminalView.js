import React, {Component} from 'react';
import TerminalCard from '../../components/Terminal/TerminalCard';
import {connect} from 'react-redux';
import {commandSubmitted, connectRequested} from '../../actions/CommandActions';
import PropTypes from 'prop-types';

class TerminalView extends Component {
    componentDidMount() {
        // Get only if empty
        // TODO move this check to somewhere else
        // if (this.props.passes.length === 0 && process.env.NODE_ENV === 'production') {
        //     this.props.onRequestPasses();
        // }
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
            </div>
        );
    }
}

TerminalView.propTypes = {
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        command: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
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
    onSubmit: (command) => dispatch(commandSubmitted(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TerminalView);
