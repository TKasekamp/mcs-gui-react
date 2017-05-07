import React from 'react';
import {storiesOf} from '@kadira/storybook';
import PassTable from '../components/Passes/PassTable';

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

storiesOf('PassTable', module)
    .add('renders', () => {
            return (<PassTable fetchState={{inFlight: false}} passes={passes}/>)
        }
    );
