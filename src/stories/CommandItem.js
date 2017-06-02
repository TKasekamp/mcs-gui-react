import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CommandItem from '../components/Terminal/CommandItem';

const commandWaiting =     {
    id: '40e4db72-34ee-43c0-9910-bf847b3bc276',
    userId: '20c5c7db-1849-44fc-bfc0-e6b218eeccc7',
    commandString: 'OBCS.ping()',
    submitTime: '2017-06-01T21:12:55.8575978Z',
    status: 'WAITING',
    responseString: '',
    priority: 'MEDIUM',
    obcsSchedule: 'NOW',
    mcsSchedule: 'NOW'
};

storiesOf('CommandItem', module)
    .add('waiting', () => {
            return (<CommandItem command={commandWaiting}/>);
        }
    );
