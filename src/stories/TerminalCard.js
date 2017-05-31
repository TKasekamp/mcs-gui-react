import React from 'react';
import {storiesOf} from '@kadira/storybook';
import TerminalCard from '../components/Terminal/TerminalCard';

const commandsWaiting = [{
    commandString: 'OBCS.ping()',
    submitTime: 1496240617546,
    status: 'WAITING'
    },
    {
        commandString: 'OBCS.pong()',
        submitTime: 1496240617546,
        status: 'RESPONSE_RECEIVED',
        responseTime: 1496240617546,
        responseString: 'A random value'

    }];

storiesOf('TerminalCard', module)
    .add('waiting', () => {
            return (<TerminalCard commands={commandsWaiting}/>);
        }
    );
