// @vendors
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// @material-ui
import Button from '@mui/material/Button';

// @actions
import { updateMetaMask } from '../../../store/actions';

// @utils
import { connectWallet } from '../../helpers';

const ConnectMetaMask = ({ disabled }) => {
    const dispatch = useDispatch();

    const handleOnClick = useCallback(async () => {
        const wallet = await connectWallet();
        dispatch(updateMetaMask(wallet));
    }, []);

    return (
        <Button
            disabled={disabled}
            onClick={handleOnClick}
            variant="contained"
        >
            Connect
        </Button>
    );
};

ConnectMetaMask.propTypes = {
    disabled: PropTypes.bool
};

ConnectMetaMask.defaultProps = {
    disabled: false
};

export default ConnectMetaMask;
