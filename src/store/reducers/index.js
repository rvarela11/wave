// @actionTypes
import * as types from '../actions/actionTypes';

// @utiles
import {
    REQUEST,
    SUCCESS,
    FAILURE
} from '../actions';

const initialState = {
    post: {
        isLoading: false
    },
    posts: [],
    user: {
        isLoading: true
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_METAMASK:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoading: false,
                    metaMask: action.metaMask
                }
            };
        case types.GET_ALL_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            };
        case types.CREATE_POST[REQUEST]:
            return {
                ...state,
                post: {
                    ...state.post,
                    isLoading: true
                }
            };
        case types.CREATE_POST[SUCCESS]:
            return {
                ...state,
                post: {
                    ...state.post,
                    isLoading: false
                }
            };
        case types.CREATE_POST[FAILURE]:
            return {
                ...state,
                post: {
                    ...state.post,
                    isLoading: false
                }
            };
        default:
            return state;
    }
};

export default reducer;
