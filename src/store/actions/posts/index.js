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

export const createPostActions = {
    request: () => createAction(types.CREATE_POST[REQUEST]),
    success: () => createAction(types.CREATE_POST[SUCCESS]),
    failure: (error) => createAction(types.CREATE_POST[FAILURE], { error })
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

export const updateAllPosts = (post) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_ALL_POSTS,
        post
    });
};

export const createPost = (message) => async (dispatch) => {
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        dispatch(createPostActions.request());
        const postTxn = await wavePortalContract.newPost(message, { gasLimit: 400000 });
        await postTxn.wait();
        dispatch(createPostActions.success());
    } catch (error) {
        console.log(error);
        const { code, message } = error;
        const errorMessage = (code === 4001) ? message : 'Transaction failed';
        dispatch(createPostActions.failure(errorMessage));
    }
};

export const clearPost = () => ({
    type: types.CLEAR_POST
});
