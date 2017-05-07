import React from 'react';
import {storiesOf} from '@kadira/storybook';
import PassStatus from '../components/Passes/PassStatus';


storiesOf('PassStatus', module)
    .add('in Future', () => {
            return (<PassStatus value={'IN_FUTURE'} time={34345000}/>);
        }
    )
    .add('in Range', () => {
            return (<PassStatus value={'IN_RANGE'} time={345000}/>);
        }
    )
    .add('pass over', () => {
            return (<PassStatus value={'OVER'} time={0}/>);
        }
    );
