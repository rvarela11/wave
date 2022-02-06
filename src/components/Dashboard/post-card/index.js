// @vendors
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

// @components
import PostCardEdit from './edit';

// @actions
import { deletePost } from '../../../store/actions/posts';

// @style
import './style.css';

const PostCard = ({
    addr,
    index,
    message,
    timestamp
}) => {
    const dispatch = useDispatch();

    const { metaMask } = useSelector((state) => state.user);
    const { post } = useSelector((state) => state);

    const [isDeleting, setIsDeleting] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const showActions = addr.toLowerCase() === metaMask.address.toLowerCase();

    const handleCancel = useCallback(() => {
        setIsEditing(false);
    });

    const handleDelete = useCallback((index) => {
        setIsDeleting(true);
        dispatch(deletePost(index));
    });

    const handleEdit = useCallback(() => {
        setIsEditing(true);
    });

    useEffect(() => {
        if (!post.delete.isLoading) {
            setIsDeleting(false);
        }
    }, [post.delete.isLoading]);

    useEffect(() => {
        if (!post.update.isLoading) {
            setIsEditing(false);
        }
    }, [post.update.isLoading]);

    const displayCardContent = () => {
        if (isEditing) {
            return <PostCardEdit index={index} handleCancel={handleCancel} message={message} />;
        }
        return (
            <>
                <CardContent>
                    <Typography component="h6" variant="h6">{message}</Typography>
                </CardContent>
                {
                    showActions && (
                        <CardActions className="post-card-actions">
                            <LoadingButton
                                loading={isDeleting}
                                loadingIndicator="Deleting..."
                                onClick={() => handleDelete(index)}
                                variant="text"
                            >
                                Delete
                            </LoadingButton>
                            <Button
                                onClick={() => handleEdit(index)}
                                variant="text"
                            >
                                Edit
                            </Button>
                        </CardActions>
                    )
                }
            </>
        );
    };

    return (
        <Card sx={{ width: 500 }}>
            <CardHeader
                avatar={<Avatar aria-label="Avatar"><AccountCircleIcon /></Avatar>}
                title={addr}
                subheader={timestamp}
            />
            {displayCardContent()}
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
