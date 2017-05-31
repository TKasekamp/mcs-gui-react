import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CommandItem from '../components/Terminal/CommandItem';

const commandWaiting = {
    commandString: 'OBCS.ping()',
    submitTime: 1496240617546,
    status: 'WAITING'

};

storiesOf('CommandItem', module)
    .add('waiting', () => {
            return (<CommandItem command={commandWaiting}/>);
        }
    );
