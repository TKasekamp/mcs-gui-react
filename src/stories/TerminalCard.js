import React from 'react';
import {storiesOf} from '@kadira/storybook';
import TerminalCard from '../components/Terminal/TerminalCard';

const commandsWaiting = [
    {
        id: 'e515c437-0510-4f2f-8d37-acdbd221ad14',
        userId: 'f07f4f75-c827-458f-920c-2ad38026320b',
        commandString: 'OBCS.pong()',
        submitTime: 1496240617546,
        status: 'RESPONSE_RECEIVED',
        responseTime: 1496240617546,
        responseString: 'A random value',
        priority: 'HIGH',
        obcsSchedule: 'NOW',
        mcsSchedule: 'NOW'

    },
    {
        id: '40e4db72-34ee-43c0-9910-bf847b3bc276',
        userId: '20c5c7db-1849-44fc-bfc0-e6b218eeccc7',
        commandString: 'OBCS.ping()',
        submitTime: 1496240617546,
        status: 'WAITING',
        responseString: '',
        priority: 'MEDIUM',
        obcsSchedule: 'NOW',
        mcsSchedule: 'NOW'
    }
];

storiesOf('TerminalCard', module)
    .add('waiting', () => {
            return (<TerminalCard commands={commandsWaiting}/>);
        }
    );
