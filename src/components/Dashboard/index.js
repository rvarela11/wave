// @vendors
import React from 'react';

// @components
import CreatePost from './create-post';
import Posts from './posts-list';

// @style
import './style.css';

const Dashboard = () => (
    <div className="dashboard">
        <div className="dashboard__action-buttons">
            <CreatePost />
        </div>
        <Posts />
    </div>
);

export default Dashboard;
