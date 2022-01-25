// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Typography from '@mui/material/Typography';

// @components
import ConnectMetaMask from './ConnectMetaMask';
import DownloadMetaMask from './DownloadMetaMask';

// @style
import './style.css';

const MetaMask = ({ hasWallet }) => (
    <div className="metaMask">
        <Typography component="h5" variant="h5">MetaMask is needed for this website</Typography>
        <div className="metaMask-buttons">
            <DownloadMetaMask disabled={hasWallet} />
            <ConnectMetaMask disabled={!hasWallet} />
        </div>
        <div className="metaMask-image">
            <img alt="A screenshot of the MetaMask browser Extension" src="https://images.ctfassets.net/9sy2a0egs6zh/6ngCUoU36ABPjs6cDNnuoK/a4b9e978595248dbb685aa2c53e3f4dc/download-extension.png" />
        </div>
    </div>
);

MetaMask.propTypes = {
    hasWallet: PropTypes.bool
};

MetaMask.defaultProps = {
    hasWallet: true
};

export default MetaMask;
