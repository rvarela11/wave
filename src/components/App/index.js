// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { updateMetaMask } from '../../actions/index';

// @components
import Header from '../Header';
import MetaMask from '../MetaMask';

// @utils
import { walletConnection } from '../helpers';

const App = () => {
    const dispatch = useDispatch();
    const { metaMask = {} } = useSelector((state) => state.user);
    console.log({ metaMask });

    useEffect(async () => {
        const wallet = await walletConnection();
        dispatch(updateMetaMask(wallet));
    }, []);

    if (!metaMask.account) {
        return (
            <>
                <Header />
                <MetaMask hasWallet={metaMask.hasWallet} />
            </>
        );
    }

    return (
        <>
            <Header />
            <p>Account Found</p>
        </>
    );
};

export default App;
