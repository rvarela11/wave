// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// @components
import ConnectMetaMask from './ConnectMetaMask';
import DownloadMetaMask from './DownloadMetaMask';

// @style
import './style.css';

const MetaMask = ({ hasWallet }) => (
    <Card sx={{ width: 500 }}>
        <CardContent>
            <div className="metaMask">
                <Typography align="center" component="h5" variant="h5">MetaMask</Typography>
                <div className="metaMask-image">
                    <img alt="A screenshot of the MetaMask browser Extension" src="https://images.ctfassets.net/9sy2a0egs6zh/6ngCUoU36ABPjs6cDNnuoK/a4b9e978595248dbb685aa2c53e3f4dc/download-extension.png" />
                </div>
            </div>
        </CardContent>
        <CardActions className="metaMask-buttons">
            <DownloadMetaMask disabled={hasWallet} />
            <ConnectMetaMask disabled={!hasWallet} />
        </CardActions>
    </Card>
);

MetaMask.propTypes = {
    hasWallet: PropTypes.bool
};

MetaMask.defaultProps = {
    hasWallet: true
};

export default MetaMask;
