// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import className from 'classnames';

// @material-ui
import CircularProgress from '@mui/material/CircularProgress';

// @components
import Header from '../header';
import MetaMask from '../meta-mask';
import Dashboard from '../dashboard';
import Footer from '../footer';

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
            <div
                className={className(
                    'content',
                    { metaMask: !metaMask.account }
                )}
            >
                {content}
            </div>
            <Footer />
        </div>
    );
};

export default App;
