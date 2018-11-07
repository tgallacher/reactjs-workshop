/**
 * Handle conversion of consultant Status to internal Status state Enums
 */

export const STATUS_STATE_AVAILABLE = 'Ready';
export const STATUS_STATE_UNAVAILABLE = 'On Call';

export const isStatusAvailable = status => status === STATUS_STATE_AVAILABLE;

export const isStatusBusy = status => status === STATUS_STATE_UNAVAILABLE;

export const isStatusUnavailable = status => status && ! [
  STATUS_STATE_AVAILABLE,
  STATUS_STATE_UNAVAILABLE,
].includes(status);
