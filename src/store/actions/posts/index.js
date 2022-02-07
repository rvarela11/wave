// @actionTypes
import * as types from '../actionTypes';

// @utiles
import {
    createAction,
    REQUEST,
    SUCCESS,
    FAILURE
} from '../index';

// @contracts
import { getWavePortalContract } from '../../../contracts/wave-portal';

const postActions = {
    request: ({ ACTION_TYPES }) => createAction(ACTION_TYPES[REQUEST]),
    success: ({ ACTION_TYPES }) => createAction(ACTION_TYPES[SUCCESS]),
    failure: ({ ACTION_TYPES, error }) => createAction(ACTION_TYPES[FAILURE], { error })
};

export const getAllPosts = () => async (dispatch) => {
    let posts = [];
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        posts = await wavePortalContract.getAllPosts();
    } catch (error) {
        console.log(error);
    }
    dispatch({
        type: types.GET_ALL_POSTS,
        posts
    });
};

export const setAllPosts = (posts) => async (dispatch) => {
    dispatch({
        type: types.SET_ALL_POSTS,
        posts
    });
};

export const updateAllPosts = (post) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_ALL_POSTS,
        post
    });
};

export const createPost = (message) => async (dispatch) => {
    const ACTION_TYPES = types.CREATE_POST;
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const postTxn = await wavePortalContract.createPost(message, { gasLimit: 400000 });
        await postTxn.wait();
        dispatch(postActions.success({ ACTION_TYPES }));
    } catch (error) {
        console.log(error);
        const { code, message } = error;
        const errorMessage = (code === 4001) ? message : 'Transaction failed';
        dispatch(postActions.failure({ ACTION_TYPES, error: errorMessage }));
    }
};

export const updatePost = (message, index) => async (dispatch) => {
    const ACTION_TYPES = types.UPDATE_POST;
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const postTxn = await wavePortalContract.updatePost(message, index, { gasLimit: 400000 });
        await postTxn.wait();
        dispatch(postActions.success({ ACTION_TYPES }));
    } catch (error) {
        console.log(error);
        const { code, message } = error;
        const errorMessage = (code === 4001) ? message : 'Transaction failed';
        dispatch(postActions.failure({ ACTION_TYPES, error: errorMessage }));
    }
};

export const deletePost = (index) => async (dispatch) => {
    const ACTION_TYPES = types.DELETE_POST;
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const postTxn = await wavePortalContract.deletePost(index);
        await postTxn.wait();
        dispatch(postActions.success({ ACTION_TYPES }));
    } catch (error) {
        console.log(error);
        const { code, message } = error;
        const errorMessage = (code === 4001) ? message : 'Transaction failed';
        dispatch(postActions.failure({ ACTION_TYPES, error: errorMessage }));
    }
};
