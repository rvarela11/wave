// @vendors
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// @components
import ModalWithButton from '../../shared/modal-with-button';

// @actions
import { createPost } from '../../../store/actions/posts';

// @constants
import { CHARACTER_LIMIT } from '../constants';

// @style
import './style.css';

const button = {
    label: 'Create Post',
    variant: 'contained'
};

const CreatePost = () => {
    const dispatch = useDispatch();

    const { closeModal, isLoading } = useSelector((state) => state.post.create);

    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => setValue(e.target.value));
    const handleClear = useCallback(() => setValue(''));
    const handleModalClose = useCallback(() => handleClear());
    const handleSubmit = useCallback(() => dispatch(createPost(value)));

    return (
        <ModalWithButton button={button} closeModal={closeModal} handleModalClose={handleModalClose}>
            <Card sx={{ width: 500 }}>
                <CardContent className="create-post-content">
                    <Typography align="center" component="h5" variant="h5">Create post</Typography>
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
                <CardActions className="create-post-actions">
                    <Button disabled={isLoading} onClick={handleClear} variant="contained">Clear</Button>
                    <LoadingButton loading={isLoading} onClick={handleSubmit} variant="contained">Submit</LoadingButton>
                </CardActions>
            </Card>
        </ModalWithButton>
    );
};

export default CreatePost;
