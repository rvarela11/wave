// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @material-ui
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PostCard = ({ addr, message }) => (
    <Card sx={{ width: 500 }}>
        <CardHeader
            avatar={<Avatar aria-label="Avatar"><AccountCircleIcon /></Avatar>}
            title={addr}
            subheader="September 14, 2016"
        />
        <CardContent>
            <Typography component="h6" variant="h6">{message}</Typography>
        </CardContent>
    </Card>
);

PostCard.propTypes = {
    addr: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
    // timestamp: PropTypes.object.isRequired
};

export default PostCard;
