import React from 'react';
import {shallow} from 'enzyme';
import Pass from '../../../src/components/Passes/Pass';

describe('Pass', () => {
    it('renders', () => {
        const pass = {
            'id': 'random-id-0',
            'aos': 1494001057,
            'los': 1494002357,
            'maxElevation': 41.5,
            'groundStation': 'Tartu'
        };
        expect(shallow(<Pass key={pass.id} groundStation={pass.groundStation} maxElevation={pass.maxElevation}
                             id={pass.id} aos={pass.aos} los={pass.los}
        />)).toBeDefined();
    });

    it('has 4 <td>', () => {
        const pass = {
            'id': 'random-id-0',
            'aos': 1494001057,
            'los': 1494002357,
            'maxElevation': 41.5,
            'groundStation': 'Tartu'
        };
        expect(shallow(<Pass key={pass.id} groundStation={pass.groundStation} maxElevation={pass.maxElevation}
                             id={pass.id} aos={pass.aos} los={pass.los}
        />).find('td').length).toBe(4)
    });
});
