// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// @material-ui
import Typography from '@mui/material/Typography';

// @components
import CreatePost from './create-post';
import PostCard from './post-card';

// @actions
import { getAllPosts } from '../../store/actions/posts';

// @style
import './style.css';

const Dashboard = () => {
    const dispatch = useDispatch();

    const { posts } = useSelector((state) => state);

    useEffect(() => dispatch(getAllPosts()), []);

    return (
        <div className="dashboard">
            <div className="dashboard__action-buttons">
                <CreatePost />
            </div>
            <div className="dashboard__posts">
                <Typography align="center" component="h5" variant="h5">Posts</Typography>
                <div className="dashboard__posts-list">
                    { posts.map(({ addr, message, timestamp }, index) => (
                        <PostCard
                            key={index}
                            addr={addr}
                            index={index}
                            message={message}
                            timestamp={moment(timestamp).format('LL')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
