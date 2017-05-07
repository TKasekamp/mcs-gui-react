/**
 * Created by Tõnis Kasekamp on 07.05.2017.
 */

import {calculateDuration} from './Time';

const IN_RANGE = 'IN_RANGE';
const IN_FUTURE = 'IN_FUTURE';
const OVER = 'OVER';

export const calculatePassStatus = (aos, los) => {
    const now = new Date();
    const utcDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000).getTime();
    if (utcDate < aos) {
        let time = calculateDuration(utcDate, aos);
        return {value: IN_FUTURE, time: time};
    } else if (utcDate < los) {
        let time = calculateDuration(utcDate, los);
        return {value: IN_RANGE, time: time};
    } else {
        return {value: OVER, time: 0};
    }
};
