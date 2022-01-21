// @vendors
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// @actions
import { updateMetaMask } from '../../../store/actions';

// @utils
import { connectWallet } from '../../helpers';

const ConnectMetaMask = () => {
    const dispatch = useDispatch();

    const handleOnClick = useCallback(async () => {
        const wallet = await connectWallet();
        dispatch(updateMetaMask(wallet));
    }, []);

    return (
        <div className="TabContentItem__Item-cagrht-0 cfLtLY">
            <h2 className="DownloadTab__Heading-f1ft5t-0 bYrtcy">Connect to MetaMask</h2>
            <div className="DownloadTab__ImageWrapper-f1ft5t-1 hsMbgO">
                <p>Image</p>
            </div>
            <div className="DownloadTab__DownLoadWrapper-f1ft5t-2 fFjDvV">
                <div className="DownloadTab__Buttons-f1ft5t-3 gbzYnJ">
                    <button className="waveButton" onClick={handleOnClick} type="button">Connect to MetaMask</button>
                </div>
            </div>
        </div>
    );
};

export default ConnectMetaMask;
