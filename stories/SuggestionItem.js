import React from 'react';
import {storiesOf} from '@kadira/storybook';
import SuggestionItem from '../src/components/Terminal/fragments/SuggestionItem';

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

storiesOf('SuggestionItem', module)
    .add('no params', () => {
            return (<SuggestionItem id={noParams.id} parameters={noParams.parameters} name={noParams.name}
                                    subsystems={noParams.subsystems}/>);
        }
    )
    .add('one param', () => {
            return (<SuggestionItem id={oneParams.id} parameters={oneParams.parameters} name={oneParams.name}
                                    subsystems={oneParams.subsystems}/>);
        }
    )
    .add('two params', () => {
            return (<SuggestionItem id={twoParams.id} parameters={twoParams.parameters} name={twoParams.name}
                                    subsystems={twoParams.subsystems}/>);
        }
    );
