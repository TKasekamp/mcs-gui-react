/**
 * Created by Tõnis Kasekamp on 07.05.2017.
 */
import {calculateDuration} from '../../src/logic/Time';
describe('Time', () => {
    it('calculates duration', () => {
        const dur = calculateDuration(1494001057, 1494002357);
        expect(dur).toBe(1300);
    });

});
