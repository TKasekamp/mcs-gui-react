import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CommandDescription from '../components/Terminal/fragments/CommandDescription';

const noParams = {
    id: 0,
    name: 'ping',
    subsystems: ['OBCS', 'COM', 'EPS', 'CAM'],
    description: 'This does a ping',
    parameters: []
};

const oneParams = {
    id: 0,
    name: 'ping',
    subsystems: ['OBCS', 'COM', 'EPS', 'CAM'],
    description: 'This does a ping',
    parameters: [{name: 'timeStamp', description: 'Time when ping was sent', type: 'uint32', default: 0}]
};

const twoParams = {
    id: 0,
    name: 'ping',
    subsystems: ['OBCS', 'COM', 'EPS', 'CAM'],
    description: 'This does a ping',
    parameters: [{name: 'timeStamp', description: 'Time when ping was sent', type: 'uint32', default: 0},
        {name: 'killSwitch', description: 'Kills everything', type: 'boolean', default: false}]
};

storiesOf('CommandDescription', module)
    .add('no params', () => {
            return (<CommandDescription commandPrototype={noParams}/>);
        }
    )

    .add('one param', () => {
            return (<CommandDescription commandPrototype={oneParams}/>);
        }
    )
    .add('two params', () => {
            return (<CommandDescription commandPrototype={twoParams}/>);
        }
    );
;
