import React from 'react';
import {mount, shallow} from 'enzyme';
import Pass from '../../../src/components/Passes/Pass';
import PassStatus from '../../../src/components/Passes/PassStatus';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

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

    it('has 7 <td>', () => {
        const pass = {
            'id': 'random-id-0',
            'aos': 1494001057,
            'los': 1494002357,
            'maxElevation': 41.5,
            'groundStation': 'Tartu'
        };
        expect(shallow(<Pass key={pass.id} groundStation={pass.groundStation} maxElevation={pass.maxElevation}
                             id={pass.id} aos={pass.aos} los={pass.los}
        />).find('td').length).toBe(7);
    });

    it('has default status', () => {
        const pass = {
            'id': 'random-id-0',
            'aos': new Date().getTime() - 13022000,
            'los': new Date().getTime() + 10232000,
            'maxElevation': 41.5,
            'groundStation': 'Tartu'
        };

        const item = shallow(<Pass key={pass.id} groundStation={pass.groundStation} maxElevation={pass.maxElevation}
                                   id={pass.id} aos={pass.aos} los={pass.los}
        />);
        expect(item.contains(<PassStatus value={''} time={0}/>)).toBe(true);
    });
});
