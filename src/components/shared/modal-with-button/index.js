// @vendors
import React, { useCallback, useEffect, useState } from 'react';
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
    buttonParams: {
        label,
        variant
    },
    children,
    closeModal,
    handleModalClose
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => setOpen(true));
    const handleClose = useCallback(() => {
        handleModalClose();
        setOpen(false);
    });

    useEffect(() => {
        if (closeModal) {
            handleClose();
        }
    }, [closeModal]);

    return (
        <>
            <Button onClick={handleOpen} variant={variant}>{label}</Button>
            <Modal
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
    buttonParams: PropTypes.shape({
        label: PropTypes.string,
        variant: PropTypes.string
    }).isRequired,
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.bool,
    handleModalClose: PropTypes.func
};

ModalWithButton.defaultProps = {
    closeModal: false,
    handleModalClose: () => {}
};

export default ModalWithButton;
