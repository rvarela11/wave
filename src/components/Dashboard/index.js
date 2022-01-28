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
import { getAllPosts, updateAllPosts } from '../../store/actions/posts';

// @contracts
import { getWavePortalContract } from '../../contracts/wave-portal';

// @style
import './style.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state);

    useEffect(() => dispatch(getAllPosts()), []);

    useEffect(() => {
        let wavePortalContract;
        const onNewPost = (addr, message, timestamp) => {
            const post = { addr, message, timestamp };
            dispatch(updateAllPosts(post));
        };

        if (window.ethereum) {
            wavePortalContract = getWavePortalContract(window.ethereum);
            wavePortalContract.on('NewPost', onNewPost);
        }

        return () => {
            if (wavePortalContract) {
                wavePortalContract.off('NewPost', onNewPost);
            }
        };
    }, []);

    return (
        <div className="dashboard">
            <CreatePost />
            <Typography align="center" component="h5" variant="h5">Posts</Typography>
            <div className="posts">
                { posts.map(({ addr, message, timestamp }, index) => (
                    <PostCard
                        key={index}
                        addr={addr}
                        message={message}
                        timestamp={moment(timestamp).format('LL')}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;