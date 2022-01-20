// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import ConnectMetaMask from './ConnectMetaMask';
import DownloadMetaMask from './DownloadMetaMask';

const MetaMask = ({ hasWallet }) => {
    if (!hasWallet) {
        return <DownloadMetaMask />;
    }

    return <ConnectMetaMask />;
};

MetaMask.propTypes = {
    hasWallet: PropTypes.bool
};

MetaMask.defaultProps = {
    hasWallet: true
};

export default MetaMask;
