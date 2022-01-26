// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import CircularProgress from '@mui/material/CircularProgress';

// @components
import Header from '../Header';
import MetaMask from '../MetaMask';
import Dashboard from '../Dashboard';
import Footer from '../Footer';

// @actions
import { updateMetaMask } from '../../store/actions';

// @utils
import { walletConnection } from '../helpers';

// @style
import './style.css';

const App = () => {
    const dispatch = useDispatch();
    const { isLoading, user: { metaMask = {} } } = useSelector((state) => state);
    let content = (!metaMask.account) ? <MetaMask hasWallet={metaMask.hasWallet} /> : <Dashboard />;

    useEffect(async () => {
        const wallet = await walletConnection();
        dispatch(updateMetaMask(wallet));
    }, []);

    if (isLoading) {
        content = <CircularProgress />;
    }

    return (
        <div className="app">
            <Header />
            <div className="content">{content}</div>
            <Footer />
        </div>
    );
};

export default App;
