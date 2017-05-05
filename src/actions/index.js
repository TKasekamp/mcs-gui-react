export const createPayloadForwardingAction = (type) => (payload) =>
    ({type: type, payload: payload});

// COMMON
export const PASSES_REQUESTED = 'PASSES_REQUESTED';
export const passesRequested = createPayloadForwardingAction(PASSES_REQUESTED);

export const PASSES_RETRIEVED = 'PASSES_RETRIEVED';
export const passesRetrieved = createPayloadForwardingAction(PASSES_RETRIEVED);

export const PASSES_FAILED = 'PASSES_FAILED';
export const passesFailed = createPayloadForwardingAction(PASSES_FAILED);
