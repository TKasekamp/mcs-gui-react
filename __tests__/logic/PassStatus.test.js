/**
 * Created by Tõnis Kasekamp on 07.05.2017.
 */
import {calculatePassStatus} from '../../src/logic/PassStatus';

describe('PassStatus', () => {
    const time = 1487076708000;
    const frozenTime = new Date(1487076708000);

    beforeAll(() => {
        Date = jest.fn(() => frozenTime) //14.02.2017
    });

    it('in future', () => {
        const aos = time + 2000;
        const los = time + 3000;
        const status = calculatePassStatus(aos, los);

        expect(status.value).toBe('IN_FUTURE');
        expect(status.time).toBe(2000);
    });

    it('in range', () => {
        const aos = time - 2000;
        const los = time + 3000;

        const status = calculatePassStatus(aos, los);
        expect(status.value).toBe('IN_RANGE');
        expect(status.time).toBe(3000);
    });

    it('over', () => {
        const aos = time - 2000;
        const los = time - 1000;
        const status = calculatePassStatus(aos, los);

        expect(status.value).toBe('OVER');
        expect(status.time).toBe(0);
    });
});
