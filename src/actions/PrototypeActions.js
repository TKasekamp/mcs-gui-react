/**
 * Created by Tõnis Kasekamp on 19.06.2017.
 */
import {createPayloadForwardingAction} from './index';
export const PROTOTYPES_REQUESTED = 'PROTOTYPES_REQUESTED';
export const prototypesRequested = createPayloadForwardingAction(PROTOTYPES_REQUESTED);

export const PROTOTYPES_RETRIEVED = 'PROTOTYPES_RETRIEVED';
export const prototypesRetrieved = createPayloadForwardingAction(PROTOTYPES_RETRIEVED);

export const PROTOTYPES_FAILED = 'PROTOTYPES_FAILED';
export const prototypesFailed = createPayloadForwardingAction(PROTOTYPES_FAILED);
