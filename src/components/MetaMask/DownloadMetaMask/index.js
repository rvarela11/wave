// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Button from '@mui/material/Button';

const DownloadMetaMask = ({ disabled }) => (
    <Button
        disabled={disabled}
        href="https://metamask.io/download"
        size="large"
        target="_blank"
        variant="contained"
    >
        Download MetaMask
    </Button>
);

DownloadMetaMask.propTypes = {
    disabled: PropTypes.bool
};

DownloadMetaMask.defaultProps = {
    disabled: false
};

export default DownloadMetaMask;
