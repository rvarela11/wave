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
            closeModal: false,
            error: undefined,
            isLoading: false
        },
        update: {
            error: undefined,
            isLoading: false
        },
        delete: {
            error: undefined,
            isLoading: false
        }
    },
    posts: {
        error: undefined,
        isLoading: false,
        posts: []
    },
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
        case types.SET_ALL_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    posts: [...action.posts]
                }
            };
        case types.UPDATE_ALL_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    error: undefined,
                    isLoading: false,
                    posts: [...state.posts.posts, action.post]
                }
            };
        case types.CREATE_POST[REQUEST]:
            return {
                ...state,
                post: {
                    ...state.post,
                    create: {
                        ...state.post.create,
                        closeModal: false,
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
                        closeModal: true,
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
                        closeModal: false,
                        error: action.error,
                        isLoading: false
                    }
                }
            };
        case types.GET_ALL_POSTS[REQUEST]:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    isLoading: true
                }
            };
        case types.GET_ALL_POSTS[SUCCESS]:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    error: undefined,
                    isLoading: false,
                    posts: [...action.data]
                }
            };
        case types.GET_ALL_POSTS[FAILURE]:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    error: action.error,
                    isLoading: false,
                    posts: []
                }
            };
        case types.UPDATE_POST[REQUEST]:
            return {
                ...state,
                post: {
                    ...state.post,
                    update: {
                        ...state.post.update,
                        isLoading: true
                    }
                }
            };
        case types.UPDATE_POST[SUCCESS]:
            return {
                ...state,
                post: {
                    ...state.post,
                    update: {
                        ...state.post.update,
                        error: undefined,
                        isLoading: false
                    }
                }
            };
        case types.UPDATE_POST[FAILURE]:
            return {
                ...state,
                post: {
                    ...state.post,
                    update: {
                        ...state.post.update,
                        error: action.error,
                        isLoading: false
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
