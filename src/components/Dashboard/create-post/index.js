// @vendors
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// @actions
import { createPost } from '../../../store/actions/posts';

// @style
import './style.css';

const CreatePost = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const { isLoading } = useSelector((state) => state.post);

    const handleChange = useCallback((e) => setValue(e.target.value));
    const handleClear = useCallback(() => setValue(''));
    const handleSubmit = () => {
        dispatch(createPost(value));
        handleClear();
    };
    console.log({ isLoading });
    return (
        <Card sx={{ width: 500, height: 220 }}>
            { isLoading && <div className="create-post-loading"><CircularProgress /></div>}
            {
                !isLoading && (
                    <>
                        <CardContent className="create-post-content">
                            <Typography align="center" component="h5" variant="h5">Create post</Typography>
                            <TextField
                                fullWidth
                                id="textfield-create-a-post"
                                label="What's on your mind?"
                                onChange={handleChange}
                                multiline
                                rows={2}
                                value={value}
                            />
                        </CardContent>
                        <CardActions className="create-post-actions">
                            <Button onClick={handleClear} variant="contained">Clear</Button>
                            <Button onClick={handleSubmit} variant="contained">Submit</Button>
                        </CardActions>
                    </>
                )
            }
        </Card>
    );
};

export default CreatePost;
