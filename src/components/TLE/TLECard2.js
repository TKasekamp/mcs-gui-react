import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions} from 'react-md/lib/Cards/index';
import {TableCardHeader} from 'react-md/lib/DataTables/index';
import {Button} from 'react-md/lib/Buttons/index';
import {Component} from 'react/lib/ReactBaseClasses';
import {Collapse} from 'react-md/lib/Helpers/index';

const tle = {
    'ESTCUBE 1': {
        'satelliteNumber': 39161,
        'classification': 'U',
        'launchYear': 2013,
        'launchNumber': 21,
        'launchPiece': 'C',
        'ephemerisType': 0,
        'elementNumber': 999,
        'epoch': '2017-06-20T11:05:06.222',
        'meanMotion': 0.001070395283699097,
        'meanMotionFirstDerivative': 3.1479221655376123e-15,
        'meanMotionSecondDerivative': 0,
        'eccentricity': 0.0010682,
        'inclination': 1.7109096138157494,
        'perigeeArgument': 2.2286754990538835,
        'rightAscensionOfTheAscendingNode': 4.492859721739591,
        'meanAnomaly': 4.0583233525413105,
        'revolutionNumberAtEpoch': 22123,
        'bStar': 0.000037815,
        'line1': '1 39161U 13021C   17171.46187757 +.00000187 +00000-0 +37815-4 0  9993',
        'line2': '2 39161 098.0279 257.4219 0010682 127.6937 232.5248 14.71899172221234'
    }
};

const TableActions = () => (
    <TableCardHeader
        title="TLE"
        visible={false}>
        <Button flat primary label="Refresh" tooltipLabel={'Last refreshed ' + new Date()}>refresh</Button>
    </TableCardHeader>
);

const Item3 = (props) => (
    <div className="md-tile-content md-cell--6"
         style={{paddingLeft: '16px', paddingRight: '16px', marginBottom: '1em'}}>
        <div className="md-tile-text--secondary md-text--secondary md-text-uppercase">{props.secondaryText}</div>
        <div className="md-tile-text--primary md-text">{props.primaryText}</div>
    </div>
);

Item3.propTypes = {
    secondaryText: PropTypes.string.isRequired,
    primaryText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

class TLECard2 extends Component {
    constructor(props) {
        super(props);

        this.state = {collapsed: true, collapsedJson: true};
        this._toggleCollapse = this._toggleCollapse.bind(this);
        this._toggleJson = this._toggleJson.bind(this);
    }

    _toggleCollapse() {
        this.setState({collapsed: !this.state.collapsed});
    }

    _toggleJson() {
        this.setState({collapsedJson: !this.state.collapsedJson});
    }

    render() {
        const satName = Object.keys(tle)[0];

        const other = <div className="md-grid">
            <h3 className="md-cell--12 md-title"
                style={{paddingLeft: '16px', paddingRight: '16px', marginBottom: '1em'}}>General stats</h3>
            <Item3 primaryText={satName} secondaryText="Satellite name"/>
            <Item3 primaryText={tle[satName].satelliteNumber} secondaryText="Satellite number"/>
            <Item3 primaryText={tle[satName].classification} secondaryText="Classification"/>
            <Item3 primaryText={tle[satName].launchYear} secondaryText="Launch year"/>
            <Item3 primaryText={tle[satName].launchNumber} secondaryText="Launch number"/>
            <Item3 primaryText={tle[satName].launchPiece} secondaryText="Launch piece"/>
            <h3 className="md-cell--12 md-title"
                style={{paddingLeft: '16px', paddingRight: '16px', marginBottom: '1em'}}>Numbers</h3>
            <Item3 primaryText={tle[satName].ephemerisType} secondaryText="Ephemeris type"/>
            <Item3 primaryText={tle[satName].elementNumber} secondaryText="Element number"/>
            <Item3 primaryText={tle[satName].epoch} secondaryText="Epoch"/>
            <Item3 primaryText={tle[satName].meanMotion} secondaryText="Mean motion"/>
            <Item3 primaryText={tle[satName].meanMotionFirstDerivative} secondaryText="Mean motion first derivative"/>
            <Item3 primaryText={tle[satName].meanMotionSecondDerivative} secondaryText="Mean motion second derivative"/>
            <Item3 primaryText={tle[satName].eccentricity} secondaryText="Eccentricity"/>
            <Item3 primaryText={tle[satName].inclination} secondaryText="Inclination"/>
            <Item3 primaryText={tle[satName].perigeeArgument} secondaryText="Perigree argument"/>
            <Item3 primaryText={tle[satName].rightAscensionOfTheAscendingNode}
                   secondaryText="Right ascencion of the ascending node"/>
            <Item3 primaryText={tle[satName].meanAnomaly} secondaryText="Mean anomaly"/>
            <Item3 primaryText={tle[satName].revolutionNumberAtEpoch} secondaryText="Revolution number at epoch"/>
            <Item3 primaryText={tle[satName].bStar} secondaryText="Bstar"/>
        </div>;


        const lines = <pre className="code-block">
        {tle[satName].line1}
            <br/>
            {tle[satName].line2}
        </pre>;

        const jsonCode = <pre className="code-block">
        {JSON.stringify(tle, null, 2)}
        </pre>;

        return <Card >
            <TableActions/>


            {other}


            <CardActions className="md-divider-border md-divider-border--top">
                <Button flat label="Raw TLE" onClick={this._toggleCollapse} secondary/>
                <Button flat label="Raw JSON" onClick={this._toggleJson} secondary/>
            </CardActions>


            <Collapse collapsed={this.state.collapsed}>
                {lines}
            </Collapse>
            <Collapse collapsed={this.state.collapsedJson}>
                {jsonCode}
            </Collapse>
        </Card>;
    }
}

TLECard2.propTypes = {
    tle: PropTypes.object,
};

export default TLECard2;
