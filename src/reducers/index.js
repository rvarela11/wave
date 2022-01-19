const initialState = {
    fetchLocationsLoading: false,
    locations: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_BEGIN':
            // Setting fetchLocationsLoading as true so we can show a spinner
            return {
                ...state,
                fetchLocationsLoading: true
            };
        case 'FETCH_LOCATIONS_SUCCESS':
            const locationsNoQ5NoA5C = action.payload.filter(({ name }) => !name.match(/(Q5|A5C)/));
            return {
                ...state,
                fetchLocationsLoading: false,
                locations: locationsNoQ5NoA5C
            };
        default:
            return state;
    }
};

export default reducer;
