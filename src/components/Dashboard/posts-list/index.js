// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// @material-ui
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

// @components
import PostCard from '../post-card';

// @actions
import { getAllPosts } from '../../../store/actions/posts';

// @style
import './style.css';

const Posts = () => {
    const dispatch = useDispatch();

    const { isLoading, posts } = useSelector((state) => state.posts);

    useEffect(() => dispatch(getAllPosts()), []);

    const displayPosts = () => {
        if (isLoading) {
            return <CircularProgress />;
        }
        return (
            <div className="dashboard__posts-list">
                { posts.map(({
                    addr,
                    id,
                    isPostPinned,
                    message,
                    timestamp
                }) => (
                    <PostCard
                        key={id}
                        addr={addr}
                        id={id}
                        isPostPinned={isPostPinned}
                        message={message}
                        timestamp={moment(timestamp).format('LL')}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="dashboard__posts">
            <Typography align="center" component="h5" variant="h5">Posts</Typography>
            { displayPosts() }
        </div>
    );
};

export default Posts;
