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

// @components
import EditPost from '../edit-post-modal';

// @actions
import { deletePost } from '../../../store/actions/posts';

// @style
import './style.css';

const PostCard = ({
    addr,
    id,
    message,
    timestamp
}) => {
    const dispatch = useDispatch();

    const { metaMask } = useSelector((state) => state.user);
    const { post } = useSelector((state) => state);

    const [isDeleting, setIsDeleting] = useState(false);
    const showActions = addr.toLowerCase() === metaMask.address.toLowerCase();

    const handleDelete = useCallback((id) => {
        setIsDeleting(true);
        dispatch(deletePost(id));
    });

    useEffect(() => {
        if (!post.delete.isLoading) {
            setIsDeleting(false);
        }
    }, [post.delete.isLoading]);

    return (
        <Card>
            <CardHeader
                avatar={<Avatar aria-label="Avatar"><AccountCircleIcon /></Avatar>}
                title={addr}
                subheader={timestamp}
            />
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
                                onClick={() => handleDelete(id)}
                                variant="text"
                            >
                                Delete
                            </LoadingButton>
                            <EditPost id={id} message={message} />
                        </CardActions>
                    )
                }
            </>
        </Card>
    );
};

PostCard.propTypes = {
    addr: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
};

export default PostCard;
