import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import style from './style';

const MeetingCard = ({ meeting }) => {

  return (
    <Card sx={style.card} key={meeting.meeting_id}>
      <Box sx={style.box}>
        <IconButton>
          <GroupsOutlinedIcon sx={{ color: 'white', fontSize: '2rem' }} />
        </IconButton>
        <IconButton>
          <FavoriteOutlinedIcon sx={{ color: 'white', fontSize: '2rem' }} />
        </IconButton>
      </Box>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={style.title}
      >
        {meeting.meeting_title}
      </Typography>
      <CardContent sx={style.cardcontent}>
        <Typography variant="body2" color="text.secondary" sx={{ margin: '0 15px', textAlign: 'left' }}>
          {meeting.meeting_description}
        </Typography>
        <Box sx={{ padding: '2rem 0' }}>
          <IconButton sx={{ float: 'right' }}>
            <EventNoteOutlinedIcon sx={{ fontSize: '2.5rem' }} />
          </IconButton>
          <AvatarGroup total={10} sx={{ float: 'left' }}>
            <Avatar>{meeting.user_id}</Avatar>
            <Avatar>{meeting.user_id}</Avatar>
            <Avatar>{meeting.user_id}</Avatar>
            <Avatar>{meeting.user_id}</Avatar>
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  );
}


MeetingCard.PropTypes = {
  meeting: PropTypes.shape({
    meeting_id: PropTypes.string.isRequired,
    meeting_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user_id: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
  
};

export default MeetingCard;