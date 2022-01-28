// @vendors
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

// @actions
import { clearPost, createPost } from '../../../store/actions/posts';

// @style
import './style.css';

const CHARACTER_LIMIT = 280;

const CreatePost = () => {
    const dispatch = useDispatch();
    const { error, isLoading } = useSelector((state) => state.post);

    const [value, setValue] = useState('');
    const [postError, setPostError] = useState(undefined);
    const errorHelperText = (postError) ? `- ${postError}` : '';

    const handleChange = useCallback((e) => setValue(e.target.value));
    const handleClear = useCallback(() => {
        setValue('');
        dispatch(clearPost());
    });
    const handleSubmit = () => {
        dispatch(createPost(value));
    };

    useEffect(() => {
        if (!isLoading) {
            if (!error) {
                handleClear();
            }
            setPostError(error);
        }
    }, [error, isLoading]);

    return (
        <Card sx={{ width: 500, height: 235 }}>
            <CardContent className="create-post-content">
                <Typography align="center" component="h5" variant="h5">Create a post</Typography>
                <TextField
                    error={postError !== undefined}
                    helperText={`${value.length} / ${CHARACTER_LIMIT} ${errorHelperText}`}
                    fullWidth
                    id="textfield-create-a-post"
                    inputProps={{ maxLength: CHARACTER_LIMIT }}
                    label="What's on your mind?"
                    onChange={handleChange}
                    multiline
                    rows={2}
                    value={value}
                />
            </CardContent>
            <CardActions className="create-post-actions">
                <Button disabled={isLoading} onClick={handleClear} variant="contained">Clear</Button>
                <LoadingButton loading={isLoading} onClick={handleSubmit} variant="contained">Submit</LoadingButton>
            </CardActions>
        </Card>
    );
};

export default CreatePost;
