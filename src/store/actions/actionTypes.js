import { createRequestTypes } from './index';

// MetaMask Actions
export const UPDATE_METAMASK = 'UPDATE_METAMASK';

// Post Actions
export const SET_ALL_POSTS = 'SET_ALL_POSTS';
export const UPDATE_ALL_POSTS = 'UPDATE_ALL_POSTS';
export const CREATE_POST = createRequestTypes('CREATE_POST');
export const GET_ALL_POSTS = createRequestTypes('GET_ALL_POSTS');
export const DELETE_POST = createRequestTypes('DELETE_POST');
export const UPDATE_POST = createRequestTypes('UPDATE_POST');
