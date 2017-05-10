import React from 'react';
import {storiesOf} from '@kadira/storybook';
import PassTable from '../components/Passes/PassTable';

export const passes = [
    {
        id: 'random-id-0',
        aos: new Date().getTime() - 93022000,
        los: new Date().getTime() - 75022000,
        maxElevation: 41.5,
        groundStation: 'Tartu',
        passStatus : {value: 'OVER', time: 0}
    },
    {
        id: 'random-id-1',
        aos: new Date().getTime() - 43022000,
        los: new Date().getTime() - 35022000,
        maxElevation: 23.5,
        groundStation: 'Tartu',
        passStatus : {value: 'OVER', time: 0}
    },
    {
        id: 'random-id-2',
        aos: new Date().getTime() - 13022000,
        los: new Date().getTime() + 5232000,
        maxElevation: 39.5,
        groundStation: 'Tartu',
        passStatus : {value: 'IN_RANGE', time: 0}
    },
    {
        id: 'random-id-3',
        aos: new Date().getTime() + 9232000,
        los: new Date().getTime() + 14232000,
        maxElevation: 41.5,
        groundStation: 'Tartu',
        passStatus : {value: 'IN_FUTURE', time: 0}
    }
];

storiesOf('PassTable', module)
    .add('renders', () => {
            return (<PassTable fetchState={{inFlight: false}} passes={passes}/>);
        }
    );
