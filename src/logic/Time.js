/**
 * Created by Tõnis Kasekamp on 07.05.2017.
 */

import {timeFormat} from 'd3-time-format';
export const calculateDuration = (start, end) => {
    return end - start;
};
export const myIsoFormat = timeFormat('%Y-%m-%d%T%H:%M:%S.%LZ');
export const myDayFormat = timeFormat('%Y-%m-%d');
export const myTimeFormat = timeFormat('%H:%M:%S');
