import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Pass from '../components/Passes/Pass';

storiesOf('Pass', module)
    .add('renders', () => {
        const pass = {
            'id': 'random-id-0',
            'aos': 1494001057,
            'los': 1494002357,
            'maxElevation': 41.5,
            'groundStation': 'Tartu'
        };
        return (<Pass key={pass.id} groundStation={pass.groundStation} maxElevation={pass.maxElevation}
                      id={pass.id} aos={pass.aos} los={pass.los}
            />
        )
    });
