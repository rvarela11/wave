// @vendors
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { updateMetaMask } from '../../store/actions/meta-mask';
import { setAllPosts, updateAllPosts } from '../../store/actions/posts';

// @contracts
import { getWavePortalContract } from '../../contracts/wave-portal';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
    const dispatch = useDispatch();

    const { metaMask = {} } = useSelector((state) => state.user);

    useEffect(() => {
        const onAccountsChanged = (accounts) => {
            const updatedWallet = {
                ...metaMask,
                address: accounts[0]
            };
            dispatch(updateMetaMask(updatedWallet));
        };

        const { ethereum } = window;

        if (ethereum) {
            ethereum.on('accountsChanged', onAccountsChanged);
        }

        return () => {
            if (ethereum) {
                ethereum.off('accountsChanged', onAccountsChanged);
            }
        };
    }, []);

    useEffect(() => {
        let wavePortalContract;

        const onNewPost = (addr, message, timestamp) => {
            const post = { addr, message, timestamp };
            dispatch(updateAllPosts(post));
        };

        const onUpdatePost = (posts) => {
            dispatch(setAllPosts(posts));
        };

        const onDeletePost = (posts) => {
            dispatch(setAllPosts(posts));
        };

        if (window.ethereum) {
            wavePortalContract = getWavePortalContract(window.ethereum);
            wavePortalContract.on('CreatePost', onNewPost);
            wavePortalContract.on('UpdatePost', onUpdatePost);
            wavePortalContract.on('DeletePost', onDeletePost);
        }

        return () => {
            if (wavePortalContract) {
                wavePortalContract.off('CreatePost', onNewPost);
                wavePortalContract.off('UpdatePost', onUpdatePost);
                wavePortalContract.off('DeletePost', onDeletePost);
            }
        };
    }, []);

    const value = useMemo(() => ({}), []);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

AppContextProvider.defaultProps = {};

export { AppContext, AppContextProvider };
