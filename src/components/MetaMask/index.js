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
        <Typography align="center" component="h5" variant="h5">MetaMask is needed for this website</Typography>
        <div className="metaMask-image">
            <img alt="A screenshot of the MetaMask browser Extension" src="https://images.ctfassets.net/9sy2a0egs6zh/6ngCUoU36ABPjs6cDNnuoK/a4b9e978595248dbb685aa2c53e3f4dc/download-extension.png" />
        </div>
        <div className="metaMask-buttons">
            <DownloadMetaMask disabled={hasWallet} />
            <ConnectMetaMask disabled={!hasWallet} />
        </div>
        <div className="metaMask-downloadBrowser">
            <div className="metaMask-downloadBrowser__message">
                <Typography align="center" component="h5" variant="h5">Supported Browsers</Typography>
                <div className="metaMask-downloadBrowser__imgage-list">
                    <img loading="lazy" decoding="async" src="https://images.ctfassets.net/9sy2a0egs6zh/5CEOSBaSKv43i0mNninl5G/9274e5d9ae5e71bdccf105db385cbd96/chrome_1chrome.png" alt="Chrome" />
                    <img loading="lazy" decoding="async" src="https://images.ctfassets.net/9sy2a0egs6zh/4WVycyyYvlfuRrArPRjj1d/32b6ef0b5c61f7b58e940293f4d549ad/Firefox_1Firefox.png" alt="Firefox" />
                    <img loading="lazy" decoding="async" src="https://images.ctfassets.net/9sy2a0egs6zh/6HcekwtMp9fRFIphaPlqX5/9fc457d259ddead76f05bf5a5aabe2c6/Brave.png" alt="Brave" />
                    <img loading="lazy" decoding="async" src="https://images.ctfassets.net/9sy2a0egs6zh/2O0Uh2Nt1OciYoK96DscLF/d6addf88cbe803f18641ce62d1716570/Edge.png" alt="Edge" />
                </div>
            </div>
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
