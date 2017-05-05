/**
 * Created by Tõnis Kasekamp on 05.05.2017.
 */
import React, {Component} from 'react';
import {format} from 'd3-format';
import {timeFormat} from 'd3-time-format';
import {TimeSeries} from 'pondjs';
import {ChartContainer, ChartRow, Charts, Legend, LineChart, Resizable, styler, YAxis} from 'react-timeseries-charts';
const tempData = {
    name: 'temperature',
    columns: ['time', 'pa', 'xo'],
    points: [
        [1400425947000, 52, 41],
        [1401425947000, 18, 45],
        [1402425949000, 26, 49],
        [1403425950000, 93, 81],
        [1404425967000, 52, 41],
        [1405425968000, 18, 45],
        [1406425969000, 26, 49],
        [1407425970000, 93, 81],
    ]
};

const timeseries = new TimeSeries(tempData);


const timerange = timeseries.timerange();
const style = styler([
    {key: 'pa', color: 'steelblue', width: 1, dashed: true},
    {key: 'xo', color: '#F68B24', width: 2}
]);

class ComTemperature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerange: timerange,
            tracker: null
        };
    }

    handleTrackerChanged(tracker) {
        this.setState({tracker});
    }


    handleTimeRangeChange(timerange) {
        this.setState({timerange});
    }

    render() {
        const f = format('.2f');
        const df = timeFormat('%Y-%m-%d %H:%M:%L');
        // const df = timeFormat('%b %d %Y %X');
        const range = this.state.timerange;

        const timeStyle = {
            fontSize: '1.2rem',
            color: '#999'
        };

        let euroValue;
        let audValue;
        if (this.state.tracker) {
            const index = timeseries.bisect(this.state.tracker);
            const trackerEvent = timeseries.at(index);
            audValue = `${f(trackerEvent.get('pa'))}`;
            euroValue = `${f(trackerEvent.get('xo'))}`;
        }

        return (
            <div className="card">
                <div className="card-block">
                    <div className="row">
                        <div className="col-sm-5">
                            <h4 className="card-title mb-0">Temperature</h4>
                            <div className="small text-muted">At some time long ago</div>
                        </div>
                    </div>
                    <div className="chart-wrapper">
                        <div className="row" style={{height: 28}}>
                            <div className="col-md-6" style={timeStyle}>
                                {this.state.tracker ? `${df(this.state.tracker)}` : ''}
                            </div>
                            <div className="col-md-6">
                                <Legend
                                    type="line"
                                    align="right"
                                    style={style}
                                    highlight={this.state.highlight}
                                    onHighlightChange={(highlight) =>
                                        this.setState({highlight})}
                                    selection={this.state.selection}
                                    onSelectionChange={(selection) =>
                                        this.setState({selection})}
                                    categories={[
                                        {key: 'pa', label: 'PA', value: audValue},
                                        {key: 'xo', label: 'XO', value: euroValue}
                                    ]}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <Resizable>
                                    <ChartContainer
                                        timeRange={range}
                                        maxTime={timeseries.range().end()}
                                        minTime={timeseries.range().begin()}
                                        trackerPosition={this.state.tracker}
                                        onTrackerChanged={this.handleTrackerChanged.bind(this)}
                                        onBackgroundClick={() =>
                                            this.setState({selection: null})}
                                        enablePanZoom={true}
                                        onTimeRangeChanged={this.handleTimeRangeChange.bind(this)}
                                        minDuration={1000 * 60 * 60 * 24 * 30}
                                    >
                                        <ChartRow height="500">
                                            <YAxis
                                                id="y"
                                                label="Temperature C"
                                                min={0}
                                                max={100}
                                                width="60"
                                                type="linear"
                                                format=".2f"
                                            />
                                            <Charts>
                                                <LineChart
                                                    axis="y"
                                                    breakLine={false}
                                                    series={timeseries}
                                                    columns={['pa', 'xo']}
                                                    style={style}
                                                    interpolation="curveBasis"
                                                    highlight={this.state.highlight}
                                                    onHighlightChange={(highlight) =>
                                                        this.setState({highlight})}
                                                    selection={this.state.selection}
                                                    onSelectionChange={(selection) =>
                                                        this.setState({selection})}
                                                />
                                            </Charts>
                                        </ChartRow>
                                    </ChartContainer>
                                </Resizable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComTemperature;
