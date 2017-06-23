import React, {Component} from 'react';
import PassTable from '../../components/Passes/PassTable';
import {connect} from 'react-redux';
import {passesRequested} from '../../actions/index';
import PropTypes from 'prop-types';
import {commandSubmitted, connectRequested} from '../../actions/CommandActions';
import {passes} from '../../../stories/PassTable';
import PassEventChart from '../../components/Passes/PassEventChart';
import TLECard from '../../components/TLE/TLECard';


class Dashboard extends Component {
    componentDidMount() {
        // Get only if empty
        // TODO move this check to somewhere else
        // if (this.props.passes.length === 0 && process.env.NODE_ENV === 'production') {
        //     this.props.onRequestPasses();
        // }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <PassTable passes={this.props.passes} fetchState={this.props.fetchState}/>
                    </div>
                    <div className="col-lg-12">
                        <PassEventChart passes={this.props.passes} fetchState={this.props.fetchState}/>
                    </div>
                    <div className="col-lg-6">
                        <TLECard/>
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
    passes: passes,
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
