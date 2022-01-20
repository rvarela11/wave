const initialState = {
    user: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_METAMASK':
            return {
                ...state,
                user: {
                    ...state.user,
                    metaMask: action.metaMask
                }
            };
        default:
            return state;
    }
};

export default reducer;
