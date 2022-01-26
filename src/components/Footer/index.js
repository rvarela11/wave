// @vendors
import React from 'react';

// @material-ui
import Typography from '@mui/material/Typography';

// @style
import './style.css';

const Footer = () => (
    <footer>
        <Typography
            align="center"
            component="h6"
            variant="body2"
        >
            This website uses MetaMask Rinkeby Test Network
        </Typography>
    </footer>
);

export default Footer;
