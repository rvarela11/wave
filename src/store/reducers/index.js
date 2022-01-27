const initialState = {
    isLoading: true,
    friends: [],
    user: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_METAMASK':
            return {
                ...state,
                isLoading: false,
                user: {
                    ...state.user,
                    metaMask: action.metaMask
                }
            };
        case 'GET_FRIENDS':
            return {
                ...state,
                friends: [...action.friends]
            };
        default:
            return state;
    }
};

export default reducer;
