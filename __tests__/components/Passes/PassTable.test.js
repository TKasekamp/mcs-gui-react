import React from 'react';
import {shallow} from 'enzyme';
import PassTable from '../../../src/components/Passes/PassTable';
import Pass from '../../../src/components/Passes/Pass';

describe('PassTable', () => {
    it('renders no Pass components without results', () => {
        expect(shallow(<PassTable inFlight={'retrieved'} passes={[]}/>).find(Pass).length)
            .toBe(0);
    });

    it('renders row for each pass', () => {
        const passes = [
            {
                'id': 'random-id-0',
                'aos': 1494001057,
                'los': 1494002357,
                'maxElevation': 41.5,
                'groundStation': 'Tartu'
            },
            {
                'id': 'random-id-1',
                'aos': 1494014357,
                'los': 1494015657,
                'maxElevation': 23.5,
                'groundStation': 'Tartu'
            },
            {
                'id': 'random-id-2',
                'aos': 1494027657,
                'los': 1494059057,
                'maxElevation': 39.5,
                'groundStation': 'Tartu'
            },
            {
                'id': 'random-id-3',
                'aos': 1494079857,
                'los': 1494109157,
                'maxElevation': 41.5,
                'groundStation': 'Tartu'
            }
        ];

        const passList = shallow(<PassTable inFlight={'retrieved'} passes={passes}/>);

        expect(passList.find(Pass).length).toBe(4);
    });
});
