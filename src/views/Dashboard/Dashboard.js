import React, {Component} from 'react';
import PassTable from '../../components/Passes/PassTable';
import {connect} from 'react-redux';
import {passesRequested} from '../../actions/index';
import PropTypes from 'prop-types';
import {commandSubmitted, connectRequested} from '../../actions/CommandActions';
import TerminalCard from '../../components/Terminal/TerminalCard';

class Dashboard extends Component {
    componentDidMount() {
        // Get only if empty
        // TODO move this check to somewhere else
        if (this.props.passes.length === 0 && process.env.NODE_ENV === 'production') {
            this.props.onRequestPasses();
        }
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
                    <div className="col-lg-12">
                        <PassTable passes={this.props.passes} fetchState={this.props.fetchState}/>
                    </div>
                </div>

            </div>
        );
    }
}

Dashboard.propTypes = {
    passes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        aos: PropTypes.number.isRequired,
        los: PropTypes.number.isRequired,
        maxElevation: PropTypes.number.isRequired,
        groundStation: PropTypes.string.isRequired,
    })).isRequired,
    commands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        command: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        result: PropTypes.string.isRequired
    })).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onConnect: PropTypes.func.isRequired,
    onRequestPasses: PropTypes.func.isRequired,
    fetchState: PropTypes.shape({
        inFlight: PropTypes.bool.isRequired,
        error: PropTypes.string
    }).isRequired,
    connected: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    passes: state.passes.passes,
    fetchState: state.passes.fetchState,
    commands: state.commands.commands,
    connected: state.commands.connected
});

const mapDispatchToProps = (dispatch) => ({
    onRequestPasses: () => dispatch(passesRequested()),
    onConnect: () => dispatch(connectRequested()),
    onSubmit: (command) => dispatch(commandSubmitted(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
