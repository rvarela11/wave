// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { getFriends } from '../../store/actions';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { friends } = useSelector((state) => state);
    console.log({ friends });

    useEffect(() => dispatch(getFriends()), []);

    return (
        <div>
            <p>Friends</p>
            <ul>
                { friends.map(({ addr }) => <li key={addr}>{`address: ${addr}`}</li>)}
            </ul>
        </div>
    );
};

export default Dashboard;
