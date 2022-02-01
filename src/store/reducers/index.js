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
        create: {
            error: undefined,
            isLoading: false
        },
        delete: {
            error: undefined,
            isLoading: false
        }
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
        case types.SET_ALL_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            };
        case types.UPDATE_ALL_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
        case types.CREATE_POST[REQUEST]:
            return {
                ...state,
                post: {
                    ...state.post,
                    create: {
                        ...state.post.create,
                        isLoading: true
                    }
                }
            };
        case types.CREATE_POST[SUCCESS]:
            return {
                ...state,
                post: {
                    ...state.post,
                    create: {
                        ...state.post.create,
                        error: undefined,
                        isLoading: false
                    }
                }
            };
        case types.CREATE_POST[FAILURE]:
            return {
                ...state,
                post: {
                    ...state.post,
                    create: {
                        ...state.post.create,
                        error: action.error,
                        isLoading: false
                    }
                }
            };
        case types.CLEAR_CREATE_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    create: {
                        ...initialState.post.create
                    }
                }
            };
        case types.DELETE_POST[REQUEST]:
            return {
                ...state,
                post: {
                    ...state.post,
                    delete: {
                        ...state.post.delete,
                        isLoading: true
                    }
                }
            };
        case types.DELETE_POST[SUCCESS]:
            return {
                ...state,
                post: {
                    ...state.post,
                    delete: {
                        ...state.post.delete,
                        error: undefined,
                        isLoading: false
                    }
                }
            };
        case types.DELETE_POST[FAILURE]:
            return {
                ...state,
                post: {
                    ...state.post,
                    delete: {
                        ...state.post.delete,
                        error: action.error,
                        isLoading: false
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;
