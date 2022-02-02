// @vendors
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

// @actions
import { deletePost } from '../../../store/actions/posts';

const PostCard = ({
    addr,
    index,
    message,
    timestamp
}) => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.post.delete);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = useCallback((index) => {
        setIsDeleting(true);
        dispatch(deletePost(index));
    });

    const handleEdit = useCallback(() => {
        setIsEditing(true);
    });

    useEffect(() => {
        if (!isLoading) {
            setIsDeleting(false);
            setIsEditing(false);
        }
    }, [isLoading]);

    return (
        <Card sx={{ width: 500 }}>
            <CardHeader
                avatar={<Avatar aria-label="Avatar"><AccountCircleIcon /></Avatar>}
                title={addr}
                subheader={timestamp}
            />
            <CardContent>
                <Typography component="h6" variant="h6">{message}</Typography>
            </CardContent>
            <CardActions className="create-post-actions">
                <LoadingButton
                    loading={isDeleting}
                    loadingIndicator="Deleting..."
                    onClick={() => handleDelete(index)}
                    variant="text"
                >
                    Delete
                </LoadingButton>
                <LoadingButton
                    loading={isEditing}
                    loadingIndicator="Editing..."
                    onClick={() => handleEdit(index)}
                    variant="text"
                >
                    Edit
                </LoadingButton>
            </CardActions>
        </Card>
    );
};

PostCard.propTypes = {
    addr: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
};

export default PostCard;
