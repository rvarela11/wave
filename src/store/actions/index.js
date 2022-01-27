import { getWavePortalContract } from '../../contracts/wave-portal';

export const UPDATE_METAMASK = 'UPDATE_METAMASK';
export const updateMetaMask = (metaMask) => ({
    type: UPDATE_METAMASK,
    metaMask
});

export const GET_FRIENDS = 'GET_FRIENDS';
export const getFriends = () => async (dispatch) => {
    let friends = [];
    try {
        const { ethereum } = window;
        const wavePortalContract = getWavePortalContract(ethereum);
        friends = await wavePortalContract.getTotalFriends();
    } catch (error) {
        console.log(error);
    }
    dispatch({
        type: GET_FRIENDS,
        friends
    });
};
