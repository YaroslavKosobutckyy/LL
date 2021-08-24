import actionTypes from './types';

export const getDataSuccess = payload => ({
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload
});

export const getDataStart = () => ({
    type: actionTypes.FETCH_DATA_START
});

export const getDataError = payload => ({
    type: actionTypes.FETCH_DATA_ERROR,
    payload
});
