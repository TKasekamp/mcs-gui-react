import React, {Component} from 'react';
import PassTable from '../../components/Passes/PassTable';
import {connect} from 'react-redux';
import {passesRequested} from '../../actions/index';
import PropTypes from 'prop-types';
import {commandSubmitted, connectRequested} from '../../actions/CommandActions';
import TerminalCard from '../../components/Terminal/TerminalCard';

const commands = [{
    id: 'asdasfafafdfsdasfafafa',
    command: 'blow up',
    userId: 'sdfdfsfgggrvdfvervr',
    status: 'completed',
    result: 'it blew up'
}];

class Dashboard extends Component {
    componentDidMount() {
        // Get only if empty
        if (this.props.passes.length === 0) {
            //this.props.onRequestPasses();
        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <TerminalCard commands={commands} onSubmit={this.props.onSubmit}/>
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
    onRequestPasses: PropTypes.func.isRequired,
    fetchState: PropTypes.shape({
        inFlight: PropTypes.bool.isRequired,
        error: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state) => ({
    passes: state.passes.passes,
    fetchState: state.passes.fetchState
});

const mapDispatchToProps = (dispatch) => ({
    onRequestPasses: () => dispatch(passesRequested()),
    onConnect: ({command}) => dispatch(connectRequested({command})),
    onSubmit: (command) => dispatch(commandSubmitted(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
