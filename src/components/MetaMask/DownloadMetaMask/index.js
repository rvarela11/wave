// @vendors
import React from 'react';

// @material-ui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// @style
import './style.css';

const DownloadMetaMask = () => (
    <div className="download-metaMask">
        <Typography component="h5" variant="h5">MetaMask is needed for this website</Typography>
        <Button href="https://metamask.io/download" target="_blank" variant="contained">Install MetaMask</Button>
        <div className="download-metaMask__image">
            <img alt="A screenshot of the MetaMask browser Extension" src="https://images.ctfassets.net/9sy2a0egs6zh/6ngCUoU36ABPjs6cDNnuoK/a4b9e978595248dbb685aa2c53e3f4dc/download-extension.png" />
        </div>
    </div>
);

export default DownloadMetaMask;
