import { createRequestTypes } from './index';

// MetaMask Actions
export const UPDATE_METAMASK = 'UPDATE_METAMASK';

// Post Actions
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const UPDATE_ALL_POSTS = 'UPDATE_ALL_POSTS';
export const CREATE_POST = createRequestTypes('CREATE_POST');
