// @vendors
import { ethers } from 'ethers';

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

const pinnedMessageCost = '0.001';

const postActions = {
    request: ({ ACTION_TYPES }) => createAction(ACTION_TYPES[REQUEST]),
    success: ({ ACTION_TYPES, data }) => createAction(ACTION_TYPES[SUCCESS], { data }),
    failure: ({ ACTION_TYPES, error }) => createAction(ACTION_TYPES[FAILURE], { error })
};

const actionError = ({ dispatch, error, ACTION_TYPES }) => {
    console.log(error);
    const { code, message } = error;
    const errorMessage = (code === 4001) ? message : 'Transaction failed';
    dispatch(postActions.failure({ ACTION_TYPES, error: errorMessage }));
};

export const getAllPosts = () => async (dispatch) => {
    const ACTION_TYPES = types.GET_ALL_POSTS;
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const posts = await wavePortalContract.getAllPosts();
        dispatch(postActions.success({ ACTION_TYPES, data: posts }));
    } catch (error) {
        actionError({ dispatch, error, ACTION_TYPES });
    }
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

export const createPost = ({ isPostMessagePinned = false, postMessage }) => async (dispatch) => {
    const ACTION_TYPES = types.CREATE_POST;
    const ether = ethers.utils.parseEther(isPostMessagePinned ? pinnedMessageCost : '0');

    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const postTxn = await wavePortalContract.createPost(postMessage, ether, { gasLimit: 400000 });
        await postTxn.wait();
        dispatch(postActions.success({ ACTION_TYPES }));
    } catch (error) {
        actionError({ dispatch, error, ACTION_TYPES });
    }
};

export const updatePost = ({ id, isPostMessagePinned = false, postMessage }) => async (dispatch) => {
    const ACTION_TYPES = types.UPDATE_POST;
    const ether = ethers.utils.parseEther(isPostMessagePinned ? pinnedMessageCost : '0');

    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const postTxn = await wavePortalContract.updatePost(id, postMessage, ether, { gasLimit: 400000 });
        await postTxn.wait();
        dispatch(postActions.success({ ACTION_TYPES }));
    } catch (error) {
        actionError({ dispatch, error, ACTION_TYPES });
    }
};

export const deletePost = (id) => async (dispatch) => {
    const ACTION_TYPES = types.DELETE_POST;
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(postActions.request({ ACTION_TYPES }));
        const postTxn = await wavePortalContract.deletePost(id);
        await postTxn.wait();
        dispatch(postActions.success({ ACTION_TYPES }));
    } catch (error) {
        actionError({ dispatch, error, ACTION_TYPES });
    }
};
