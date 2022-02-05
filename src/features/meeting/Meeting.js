import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import MeetingCard from '../../common/meetingCard/MeetingCard';
import { userMeetingsAsync, selectUserMeetingsState } from './meetingSlice';
import MeetingForm from './meetingForm/MeetingForm';
import { selectUserState } from '../user/userSlice';

const Meeting = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(selectUserMeetingsState);
  const userState = useSelector(selectUserState);
  useEffect(() => {
    dispatch(userMeetingsAsync(userState.id));
  }, [userState]);

  return (
    <main>
      <Container>
        <Box>
          <MeetingForm />
        </Box>
        <Grid
          container
          sx={{
            gap: '3rem',
            margin: '4rem 0',
            justifyContent: 'center',
          }}
        >
          {meetings.map((meeting) => (
            <Grid key={meeting.id}>
              <MeetingCard meeting={meeting} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Meeting;
