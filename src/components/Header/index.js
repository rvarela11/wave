// @vendors
import React from 'react';

// @material-ui
import Typography from '@mui/material/Typography';

// @style
import './style.css';

const Header = () => (
    <header>
        <img src={`${process.env.PUBLIC_URL}/images/wave-logo-icon.png`} />
        <Typography align="center" component="h1" variant="h2">Wave</Typography>
    </header>
);

export default Header;
