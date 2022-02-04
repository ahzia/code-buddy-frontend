import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MeetingCard from '../../common/meetingCard/MeetingCard';
import { selectAllMeetingsState, allMeetingsAsync } from '../meeting/meetingSlice';
import MeetingForm from '../meeting/meetingForm/MeetingForm';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allMeetingsAsync());
  }, []);
  const meetings = useSelector(selectAllMeetingsState);
  return (
    <main>
      <Box sx={{ paddingTop: '4rem' }}>
        <MeetingForm />
      </Box>
      <Container>
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

export default Home;
