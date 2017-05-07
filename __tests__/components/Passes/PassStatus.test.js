import React from 'react';
import {shallow} from 'enzyme';
import PassStatus from '../../../src/components/Passes/PassStatus';

describe('PassStatus', () => {
    it('renders', () => {
        const status = {
            value: 'IN_FUTURE', time: 345000
        };
        expect(shallow(<PassStatus value={status.value} time={status.time}
        />)).toBeDefined();
    });

    it('in future', () => {
        const status = {
            value: 'IN_FUTURE', time: 345000
        };
        const pass = shallow(<PassStatus value={status.value} time={status.time}
        />);
        expect(pass.find('.badge-success').length).toBe(1);
        // Have to check if time is rendered. Will break if format changes
        expect(pass.text()).toMatch(/:/);
    });

    it('in range', () => {
        const status = {
            value: 'IN_RANGE', time: 345000
        };
        const pass = shallow(<PassStatus value={status.value} time={status.time}
        />);
        expect(pass.find('.badge-danger').length).toBe(1);
        // Have to check if time is rendered. Will break if format changes
        expect(pass.text()).toMatch(/:/);
    });

    it('over', () => {
        const status = {
            value: 'OVER', time: 0
        };
        const pass = shallow(<PassStatus value={status.value} time={status.time}
        />);
        expect(pass.find('.badge-default').length).toBe(1);
        // Have to check if time is rendered. Will break if format changes
        expect(pass.text()).not.toMatch(/:/);
    });

});
