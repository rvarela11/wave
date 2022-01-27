export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const createRequestTypes = (base) => [REQUEST, SUCCESS, FAILURE].reduce((accumulator, type) => {
    // eslint-disable-next-line no-param-reassign
    accumulator[type] = `${base}_${type}`;
    return accumulator;
}, {});

export const createAction = (type, payload = {}) => ({
    type,
    ...payload
});
