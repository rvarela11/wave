// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @components
import CreatePost from './create-post';

// @actions
import { getAllPosts } from '../../store/actions/posts';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state);

    useEffect(() => dispatch(getAllPosts()), []);

    return (
        <div>
            <CreatePost />
            <p>Posts</p>
            <ul>
                { posts.map(({ addr, message }) => (
                    <>
                        <li key={addr}>{`Address: ${addr}`}</li>
                        <li key={addr}>{`Message: ${message}`}</li>
                    </>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
