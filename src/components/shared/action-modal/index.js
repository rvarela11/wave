// @vendors
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// @components
import ModalWithButton from '../modal-with-button';

// @constants
import { CHARACTER_LIMIT } from '../../dashboard/constants';

// @style
import './style.css';

const ActionModal = ({
    buttonParams,
    closeModal,
    isLoading,
    message,
    modalParams,
    onSubmit
}) => {
    const [value, setValue] = useState(message);

    const handleChange = useCallback((e) => setValue(e.target.value));
    const handleClear = useCallback(() => setValue(''));
    const handleModalClose = useCallback(() => handleClear());
    const handleSubmit = useCallback(() => onSubmit(value));

    return (
        <ModalWithButton buttonParams={buttonParams} closeModal={closeModal} handleModalClose={handleModalClose}>
            <Card sx={{ width: 500 }}>
                <CardContent className="create-post__content">
                    <Typography align="center" component="h5" variant="h5">{`${modalParams.title} post`}</Typography>
                    <TextField
                        disabled={isLoading}
                        helperText={`${value.length} / ${CHARACTER_LIMIT}`}
                        fullWidth
                        id="textfield-create-a-post"
                        inputProps={{ maxLength: CHARACTER_LIMIT }}
                        label="What's on your mind?"
                        onChange={handleChange}
                        multiline
                        rows={5}
                        value={value}
                    />
                </CardContent>
                <CardActions className="create-post__actions">
                    <Button disabled={isLoading} onClick={handleClear} variant="contained">Clear</Button>
                    <LoadingButton loading={isLoading} onClick={handleSubmit} variant="contained">Submit</LoadingButton>
                </CardActions>
            </Card>
        </ModalWithButton>
    );
};

ActionModal.propTypes = {
    buttonParams: PropTypes.shape({
        label: PropTypes.string,
        variant: PropTypes.string
    }).isRequired,
    closeModal: PropTypes.bool,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    modalParams: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onSubmit: PropTypes.func
};

ActionModal.defaultProps = {
    closeModal: false,
    isLoading: false,
    message: '',
    onSubmit: () => {}
};

export default ActionModal;
