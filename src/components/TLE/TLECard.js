/**
 * Created by Tõnis Kasekamp on 28.05.2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions} from 'react-md/lib/Cards/index';
import {DataTable, TableBody, TableCardHeader, TableColumn, TableRow} from 'react-md/lib/DataTables/index';
import {Button} from 'react-md/lib/Buttons/index';
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

class TLECard extends Component {
    constructor(props) {
        super(props);

        this.state = {collapsed: true};
        this._toggleCollapse = this._toggleCollapse.bind(this);
    }

    _toggleCollapse() {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        const
            satName = Object.keys(tle)[0];

        const
            body = (<TableBody>
                <TableRow key={satName}>
                    <TableColumn header={true}>Satellite name</TableColumn>
                    <TableColumn numeric={true}>{satName}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].satelliteNumber}>
                    <TableColumn header={true}>Satellite number</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].satelliteNumber}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].classification}>
                    <TableColumn header={true}>Classification</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].classification}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].launchYear}>
                    <TableColumn header={true}>Launch year</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].launchYear}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].launchNumber}>
                    <TableColumn header={true}>Launch number</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].launchNumber}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].launchPiece}>
                    <TableColumn header={true}>Launch piece</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].launchPiece}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].ephemerisType}>
                    <TableColumn header={true}>Ephemeris type</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].ephemerisType}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].elementNumber}>
                    <TableColumn header={true}>Element number</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].elementNumber}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].epoch}>
                    <TableColumn header={true}>Epoch</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].epoch}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].meanMotion}>
                    <TableColumn header={true}>Mean motion</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].meanMotion}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].meanMotionFirstDerivative}>
                    <TableColumn header={true}>Mean motion first derivative</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].meanMotionFirstDerivative}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].meanMotionSecondDerivative - 12}>
                    <TableColumn header={true}>Mean motion second derivative</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].meanMotionSecondDerivative}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].eccentricity}>
                    <TableColumn header={true}>Eccentricity</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].eccentricity}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].inclination}>
                    <TableColumn header={true}>Inclination</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].inclination}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].perigeeArgument}>
                    <TableColumn header={true}>Perigree argument</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].perigeeArgument}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].rightAscensionOfTheAscendingNode}>
                    <TableColumn header={true}>Right ascension of the ascending node</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].rightAscensionOfTheAscendingNode}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].meanAnomaly}>
                    <TableColumn header={true}>Mean anomaly</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].meanAnomaly}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].revolutionNumberAtEpoch}>
                    <TableColumn header={true}>Revolution number at epoch</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].revolutionNumberAtEpoch}</TableColumn>
                </TableRow>
                <TableRow key={tle[satName].bStar}>
                    <TableColumn header={true}>Bstar</TableColumn>
                    <TableColumn numeric={true}>{tle[satName].bStar}</TableColumn>
                </TableRow>
            </TableBody>);


        const
            lines = <pre className="code-block">
                {tle[satName].line1}
                <br/>
                {tle[satName].line2}
        </pre>;

        return <Card >


            <TableActions/>
            <DataTable plain>
                {body}
            </DataTable>
            <CardActions className="md-divider-border md-divider-border--top">
                <Button flat label="Raw data" onClick={this._toggleCollapse} secondary/>
            </CardActions>


            <Collapse collapsed={this.state.collapsed}>
                {lines}
            </Collapse>
        </Card>;
    }
}


TLECard.propTypes = {
    tle: PropTypes.object,
};

export default TLECard;
