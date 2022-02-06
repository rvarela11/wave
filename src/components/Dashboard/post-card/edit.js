// @vendors
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';

// @actions
import { updatePost } from '../../../store/actions/posts';

// @constants
import { CHARACTER_LIMIT } from '../constants';

// @style
import './style.css';

const PostCardEdit = ({ index, handleCancel, message }) => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector((state) => state.post.update);

    const [disableSubmit, setDisableSubmit] = useState(true);
    const [value, setValue] = useState(message);

    const handleChange = useCallback((e) => {
        setDisableSubmit(false);
        setValue(e.target.value);
    });

    const handleSubmit = useCallback(() => {
        dispatch(updatePost(value, index));
    });

    return (
        <>
            <CardContent>
                <TextField
                    disabled={isLoading}
                    helperText={`${value.length} / ${CHARACTER_LIMIT}`}
                    fullWidth
                    id="textfield-edit-a-post"
                    inputProps={{ maxLength: CHARACTER_LIMIT }}
                    onChange={handleChange}
                    multiline
                    value={value}
                />
            </CardContent>
            <CardActions className="post-card-actions">
                <Button
                    onClick={handleCancel}
                    variant="contained"
                >
                    Cancel
                </Button>
                <LoadingButton
                    disabled={disableSubmit}
                    loading={isLoading}
                    onClick={handleSubmit}
                    variant="contained"
                >
                    Submit
                </LoadingButton>
            </CardActions>
        </>
    );
};

PostCardEdit.propTypes = {
    index: PropTypes.number.isRequired,
    handleCancel: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default PostCardEdit;
