// @vendors
import React from 'react';

// @components
import CreatePost from './create-post-modal';
import Posts from './posts-list';

// @style
import './style.css';

const Dashboard = () => (
    <div className="dashboard">
        <div>
            <CreatePost />
        </div>
        <Posts />
    </div>
);

export default Dashboard;
