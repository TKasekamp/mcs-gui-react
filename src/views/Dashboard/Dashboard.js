import React, {Component} from 'react';
import PassTable from '../../components/Passes/PassTable';
import {connect} from 'react-redux';
import {passesRequested} from '../../actions/index';
import PropTypes from 'prop-types';
import {commandSubmitted, connectRequested} from '../../actions/CommandActions';
import TerminalCard from '../../components/Terminal/TerminalCard';
import {passes} from '../../stories/PassTable';
import PassEventChart from '../../components/Passes/PassEventChart';
import TLECard from '../../components/TLE/TLECard';


const ec1 =
    {
        name: 'ESTCUBE 1',
        'line2': '2 39161  98.0494 293.0813 0011107  99.1953 261.0497 14.71695995172946',
        'line1': '1 39161U 13021C   16209.16355149  .00000281  00000-0  53050-4 0  9997'
    }
;

const tleString = 'ISS (ZARYA)\n' +
    '1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927\n' +
    '2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537';
class Dashboard extends Component {
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
                    <div className="col-lg-12">
                        <PassTable passes={this.props.passes} fetchState={this.props.fetchState}/>
                    </div>
                    <div className="col-lg-12">
                        <PassEventChart passes={this.props.passes} fetchState={this.props.fetchState}/>
                    </div>
                    <div className="col-lg-6">
                        <TLECard tleString={ec1}/>
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
