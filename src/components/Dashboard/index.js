// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
    console.log({ posts });
    useEffect(() => dispatch(getAllPosts()), []);

    return (
        <div>
            <CreatePost />
            <p>Posts</p>
            <div className="posts">
                { posts.map(({ addr, message, timestamp }, index) => (
                    <PostCard
                        key={index}
                        addr={addr}
                        message={message}
                        timestamp={timestamp}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
