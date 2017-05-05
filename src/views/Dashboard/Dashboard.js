import React, {Component} from 'react';
import PassTable from '../../components/Passes/PassTable';

// Temporary
const passes = [
    {
        'id': 'random-id-0',
        'aos': 1494001057,
        'los': 1494002357,
        'maxElevation': 41.5,
        'groundStation': 'Tartu'
    },
    {
        'id': 'random-id-1',
        'aos': 1494014357,
        'los': 1494015657,
        'maxElevation': 23.5,
        'groundStation': 'Tartu'
    },
    {
        'id': 'random-id-2',
        'aos': 1494027657,
        'los': 1494059057,
        'maxElevation': 39.5,
        'groundStation': 'Tartu'
    },
    {
        'id': 'random-id-3',
        'aos': 1494079857,
        'los': 1494109157,
        'maxElevation': 41.5,
        'groundStation': 'Tartu'
    }
];
class Dashboard extends Component {

    render() {
        return (
            <div>
                Other stuff in menu.
                <div className="row">
                    <div className="col-lg-12">
                        <PassTable passes={passes} inFlight={'retrieved'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
