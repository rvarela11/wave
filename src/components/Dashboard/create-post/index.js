// @vendors
import React, { useCallback, useState } from 'react';

// @material-ui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// @style
import './style.css';

const CreatePost = () => {
    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => setValue(e.target.value));
    const handleClear = useCallback(() => setValue(''));
    const handleSubmit = () => {
        console.log({ value });
        handleClear();
    };

    return (
        <Card>
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
        </Card>
    );
};

export default CreatePost;
