// @vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const ModalWithButton = ({
    button: {
        label,
        variant
    },
    children
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen} variant={variant}>{label}</Button>
            <Modal
                aria-labelledby={`${label}-modal-title`}
                aria-describedby={`${label}-modal-description`}
                onClose={handleClose}
                open={open}
                sx={style}
            >
                {children}
            </Modal>
        </>
    );
};

ModalWithButton.propTypes = {
    button: PropTypes.shape({
        label: PropTypes.string,
        variant: PropTypes.string
    }).isRequired,
    children: PropTypes.node.isRequired
};

export default ModalWithButton;
