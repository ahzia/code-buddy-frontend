import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import MeetingCard from '../../common/meetingCard/MeetingCard';
import { userMeetingsAsync, selectUserMeetingsState } from './meetingSlice';
import MeetingForm from './meetingForm/MeetingForm';

const Meeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userMeetingsAsync());
  }, []);
  const meetings = useSelector(selectUserMeetingsState);
  return (
    <main>
      <Container>
        <Grid
          container
          sx={{
            gap: '3rem',
            margin: '4rem 0',
            justifyContent: 'center',
          }}
        >
          <Box>
            <MeetingForm />
          </Box>
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
