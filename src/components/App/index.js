// @vendors
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @material-ui
import CircularProgress from '@mui/material/CircularProgress';

// @actions
import { fetchLocations } from '../../actions/index';

const App = () => {
    const dispatch = useDispatch();
    const { fetchLocationsLoading } = useSelector((state) => state);
    console.log({ fetchLocationsLoading });

    useEffect(() => dispatch(fetchLocations()), []);

    if (fetchLocationsLoading) {
        return (
            <div className="circular-progress">
                <CircularProgress />
            </div>
        );
    }

    return (
        <p>Howdy</p>
    );
};

export default App;
