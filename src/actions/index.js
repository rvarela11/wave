import axios from 'axios';

// GET request for locations data

export const FETCH_LOCATIONS_BEGIN = 'FETCH_LOCATIONS_BEGIN';
export const fetchLocationsBegin = () => ({
    type: FETCH_LOCATIONS_BEGIN
});

export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const fetchLocationsSuccess = (data) => ({
    type: FETCH_LOCATIONS_SUCCESS,
    payload: data
});

export const fetchLocations = () => (dispatch) => {
    dispatch(fetchLocationsBegin());
    const ax = axios.create({
        baseURL: 'http://localhost:3000/'
    });
    ax.get('locations.json')
        .then((response) => dispatch(fetchLocationsSuccess(response.data)))
        .catch((error) => console.log('Error', error));
};
