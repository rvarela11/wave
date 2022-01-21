// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @components
import Header from '../Header';
import MetaMask from '../MetaMask';
import Footer from '../Footer';

// @actions
import { updateMetaMask } from '../../store/actions';

// @utils
import { walletConnection } from '../helpers';

// @style
import './style.css';

const App = () => {
    const dispatch = useDispatch();
    const { metaMask = {} } = useSelector((state) => state.user);
    const content = (!metaMask.account) ? <MetaMask hasWallet={metaMask.hasWallet} /> : <p>Account Found</p>;

    useEffect(async () => {
        const wallet = await walletConnection();
        dispatch(updateMetaMask(wallet));
    }, []);

    return (
        <div className="app">
            <Header />
            <div className="content">{content}</div>
            <Footer />
        </div>
    );
};

export default App;
