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
import { getAllPosts, setAllPosts, updateAllPosts } from '../../store/actions/posts';

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

        const onUpdatePost = (posts) => {
            dispatch(setAllPosts(posts));
        };

        const onDeletePost = (posts) => {
            dispatch(setAllPosts(posts));
        };

        if (window.ethereum) {
            wavePortalContract = getWavePortalContract(window.ethereum);
            wavePortalContract.on('CreatePost', onNewPost);
            wavePortalContract.on('UpdatePost', onUpdatePost);
            wavePortalContract.on('DeletePost', onDeletePost);
        }

        return () => {
            if (wavePortalContract) {
                wavePortalContract.off('CreatePost', onNewPost);
                wavePortalContract.on('UpdatePost', onUpdatePost);
                wavePortalContract.off('DeletePost', onDeletePost);
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
                        index={index}
                        message={message}
                        timestamp={moment(timestamp).format('LL')}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
