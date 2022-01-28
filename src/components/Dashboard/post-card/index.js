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

const PostCard = ({ addr, message, timestamp }) => (
    <Card sx={{ width: 500 }}>
        <CardHeader
            avatar={<Avatar aria-label="Avatar"><AccountCircleIcon /></Avatar>}
            title={addr}
            subheader={timestamp}
        />
        <CardContent>
            <Typography component="h6" variant="h6">{message}</Typography>
        </CardContent>
    </Card>
);

PostCard.propTypes = {
    addr: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
};

export default PostCard;
