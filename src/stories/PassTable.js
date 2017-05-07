import React from 'react';
import {storiesOf} from '@kadira/storybook';
import PassTable from '../components/Passes/PassTable';

const passes = [
    {
        'id': 'random-id-0',
        'aos': 1494001057000,
        'los': 1494002357000,
        'maxElevation': 41.5,
        'groundStation': 'Tartu'
    },
    {
        'id': 'random-id-1',
        'aos': 1494014357000,
        'los': 1494015657000,
        'maxElevation': 23.5,
        'groundStation': 'Tartu'
    },
    {
        'id': 'random-id-2',
        'aos': new Date().getTime() - 13022000,
        'los': new Date().getTime() + 10232000,
        'maxElevation': 39.5,
        'groundStation': 'Tartu'
    },
    {
        'id': 'random-id-3',
        'aos': 1498079857000,
        'los': 1498109157000,
        'maxElevation': 41.5,
        'groundStation': 'Tartu'
    }
];

storiesOf('PassTable', module)
    .add('renders', () => {
            return (<PassTable fetchState={{inFlight: false}} passes={passes}/>);
        }
    );
