/**
 * Created by Tõnis Kasekamp on 10.05.2017.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
// Pond
import {TimeRange, TimeRangeEvent, TimeSeries} from 'pondjs';
import {ChartContainer, ChartRow, Charts, EventChart, Resizable} from 'react-timeseries-charts';

function passEventStyleFunc(event, state) {
    // TODO colors as constants somewhere else
    let color = '#63c2de';
    switch (event.get('passStatus.value')) {
        case 'IN_RANGE':
            color = '#f86c6b';
            break;
        case 'IN_FUTURE':
            color = '#4dbd74';
            break;
        default:
    }
    switch (state) {
        case 'normal':
            return {
                fill: color
            };
        case 'hover':
            return {
                fill: color,
                opacity: 0.4
            };
        case 'selected':
            return {
                fill: color
            };
        default:
    }
}

class PassEventChart extends Component {
    constructor(props) {
        super(props);

        const events = props.passes.map(
            ({aos, los, ...data}) =>
                new TimeRangeEvent(
                    new TimeRange(aos, los),
                    data
                )
        );
        const series = new TimeSeries({name: 'passes', events});

        this.state = {
            series: series,
            tracker: null,
            timerange: series.timerange()
        };
    }

    handleTrackerChanged(tracker) {
        this.setState({tracker});
    }

    handleTimeRangeChange(timerange) {
        this.setState({timerange});
    }

    getEventText(e) {
        return e.get('groundStation') + ' ' + e.get('passStatus.value');
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-sm-5">
                            <h4 className="card-title mb-0">Passes</h4>
                            <div className="small text-muted">A small text here for no reason</div>
                        </div>
                    </div>
                    <div className="chart-wrapper">
                        {this.props.fetchState.inFlight ? 'Getting passes...' : ''}
                        <Resizable>
                            <ChartContainer
                                timeRange={this.state.timerange}
                                enablePanZoom={true}
                                onTimeRangeChanged={this.handleTimeRangeChange.bind(this)}
                            >
                                <ChartRow height="30">
                                    <Charts>
                                        <EventChart
                                            series={this.state.series}
                                            size={45}
                                            style={passEventStyleFunc}
                                            label={this.getEventText}
                                        />
                                    </Charts>
                                </ChartRow>
                            </ChartContainer>
                        </Resizable>
                    </div>
                </div>
            </div>
        );
    }
}

PassEventChart.propTypes = {
    passes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        aos: PropTypes.number.isRequired,
        los: PropTypes.number.isRequired,
        maxElevation: PropTypes.number.isRequired,
        groundStation: PropTypes.string.isRequired,
        passStatus: PropTypes.shape({
            value: PropTypes.string.isRequired,
            time: PropTypes.number
        })

    })).isRequired,
    fetchState: PropTypes.shape({
        inFlight: PropTypes.bool.isRequired,
        error: PropTypes.string
    }).isRequired
};

export default PassEventChart;
