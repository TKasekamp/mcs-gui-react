import React from 'react';
import {storiesOf} from '@kadira/storybook';
import TerminalCard from '../components/Terminal/TerminalCard';

const commandsWaiting = [
    {
        id: 'e515c437-0510-4f2f-8d37-acdbd221ad14',
        userId: 'f07f4f75-c827-458f-920c-2ad38026320b',
        commandString: 'OBCS.pong()',
        submitTime: '2017-06-01T21:12:55.8575978Z',
        status: 'RESPONSE_RECEIVED',
        responseTime: '2017-06-01T21:12:55.8575978Z',
        responseString: 'A random value',
        priority: 'HIGH',
        obcsSchedule: 'NOW',
        mcsSchedule: 'NOW'

    },
    {
        id: 'd482902a-0510-4f2f-8d37-acdbd221ad14',
        userId: 'f07f4f75-c827-458f-920c-2ad38026320b',
        commandString: 'OBCS.pong()',
        submitTime: '2017-06-01T21:12:55.8575978Z',
        status: 'RESPONSE_RECEIVED',
        responseTime: '2017-06-01T21:12:55.8575978Z',
        responseString: 'What if the response \ncontains many lines of text that can be at times very long? ' +
        '\nHow does it display that?' +
        'And here is a very long line just because I want to see it wrap around, if possible. dfsgsgsgsfsgsdfsdfsdfsd',
        priority: 'HIGH',
        obcsSchedule: 'NOW',
        mcsSchedule: 'NOW'

    },
    {
        id: '40e4db72-34ee-43c0-9910-bf847b3bc276',
        userId: '20c5c7db-1849-44fc-bfc0-e6b218eeccc7',
        commandString: 'OBCS.ping()',
        submitTime: '2017-06-01T21:12:55.8575978Z',
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
