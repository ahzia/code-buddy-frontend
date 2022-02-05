/* eslint-disable */
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
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import style from './style';
import {selectUserState} from '../../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import {createReservationAsync} from '../../features/meeting/meetingSlice';
import {openErrorSnackbar, openSuccessSnackbar} from '../snackbar/snackbarSlice';
import {selectMeetingsErrorState, selectMeetingsStatusState } from '../../features/meeting/meetingSlice';
import { useEffect } from 'react';


const MeetingCard = ({ meeting }) => {
  const userState = useSelector(selectUserState);
  const dispatch = useDispatch();

  const error = useSelector(selectMeetingsErrorState);
  const status = useSelector(selectMeetingsStatusState);
  
  useEffect(() => {
    if (status=== 'error') {
      dispatch(openErrorSnackbar(error));
    } else if (status === 'reserved') {
      dispatch(openSuccessSnackbar('Meeting Reserved'));
    }
  }, [status]);

  const handleOnClickReserve = () => {
    console.log(meeting);
  if(userState.status === 'login'){
    const reservationObject = {
      user_id: userState.id,
      meeting_id: meeting.id,
    };
    dispatch(createReservationAsync(reservationObject));
  }
  else{
    dispatch(openErrorSnackbar('You have to login'));
  }
  }
  return(
  <Card sx={style.card}>
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
      {meeting.title}
    </Typography>
    <CardContent sx={style.cardcontent}>
      <Typography variant="body2" color="text.secondary" sx={{ margin: '0 15px', textAlign: 'left' }}>
        {meeting.description}
      </Typography>
      <Box sx={{ padding: '2rem 0' }}>
        
          {(meeting.user_id != userState.id) ? 
            <IconButton sx={{ float: 'right' }} onClick={handleOnClickReserve}><EventNoteOutlinedIcon sx={{ fontSize: '2.5rem' }} /></IconButton> :
            <IconButton sx={{ float: 'right' }}><EditIcon sx={{ fontSize: '2.5rem' }} /></IconButton>
          }
        
        <AvatarGroup total={10} sx={{ float: 'left' }}>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </AvatarGroup>
      </Box>
    </CardContent>
  </Card>
  );
};

MeetingCard.propTypes = {
  meeting: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    user_id: PropTypes.number.isRequired,
  }).isRequired,

};

export default MeetingCard;
