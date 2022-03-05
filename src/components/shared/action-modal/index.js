// @vendors
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// @components
import ModalWithButton from '../modal-with-button';

// @constants
import { CHARACTER_LIMIT } from '../../dashboard/constants';

// @style
import './style.css';

const defaultState = {
    postMessage: '',
    isPostMessagePinned: false
};

const ActionModal = ({
    buttonParams,
    closeModal,
    isLoading,
    isPostPinned,
    message,
    modalParams,
    onSubmit
}) => {
    const [values, setValues] = useState({
        isPostMessagePinned: isPostPinned,
        postMessage: message
    });
    const { postMessage } = values;
    console.log({ values });

    const handleOnChangeTextField = useCallback((e) => {
        setValues((state) => ({
            ...state,
            postMessage: e.target.value
        }));
    });
    const handleOnChangeCheckbox = useCallback((e) => {
        setValues((state) => ({
            ...state,
            isPostMessagePinned: e.target.checked
        }));
    });

    const handleClearTextField = useCallback(() => {
        setValues((state) => ({
            ...state,
            postMessage: ''
        }));
    });
    const handleModalClose = useCallback(() => setValues(defaultState));
    const handleSubmit = useCallback(() => onSubmit(values));

    return (
        <ModalWithButton buttonParams={buttonParams} closeModal={closeModal} handleModalClose={handleModalClose}>
            <Card sx={{ width: 500 }}>
                <CardContent className="action-modal__content">
                    <Typography align="center" component="h5" variant="h5">{`${modalParams.title} post`}</Typography>
                    <TextField
                        disabled={isLoading}
                        helperText={`${postMessage.length} / ${CHARACTER_LIMIT}`}
                        fullWidth
                        id="textfield-create-a-post"
                        inputProps={{ maxLength: CHARACTER_LIMIT }}
                        label="What's on your mind?"
                        onChange={handleOnChangeTextField}
                        multiline
                        rows={5}
                        value={postMessage}
                    />
                </CardContent>
                <CardActions className="action-modal__actions">
                    <FormControlLabel
                        control={<Checkbox disabled={isPostPinned} onChange={handleOnChangeCheckbox} />}
                        label="Pin post for $5"
                    />
                    <div className="action-modal__actions-buttons">
                        <Button
                            disabled={isLoading}
                            onClick={handleClearTextField}
                            variant="contained"
                        >
                            Clear
                        </Button>
                        <LoadingButton
                            disabled={postMessage === ''}
                            endIcon={<SendIcon />}
                            loading={isLoading}
                            loadingPosition="end"
                            onClick={handleSubmit}
                            variant="contained"
                        >
                            Send
                        </LoadingButton>
                    </div>
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
    isPostPinned: PropTypes.bool,
    message: PropTypes.string,
    modalParams: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onSubmit: PropTypes.func
};

ActionModal.defaultProps = {
    closeModal: false,
    isLoading: false,
    isPostPinned: false,
    message: '',
    onSubmit: () => {}
};

export default ActionModal;
