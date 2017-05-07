/**
 * Created by Tõnis Kasekamp on 07.05.2017.
 */

import {utcFormat} from 'd3-time-format';
export const calculateDuration = (start, end) => {
    return end - start;
};
export const myIsoFormat = utcFormat('%Y-%m-%d%T%H:%M:%S.%LZ');
export const myDayFormat = utcFormat('%Y-%m-%d');
export const myTimeFormat = utcFormat('%H:%M:%S');
