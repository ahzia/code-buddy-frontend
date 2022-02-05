import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MeetingCard from '../../common/meetingCard/MeetingCard';
import { selectReservedMeetingsState, userReservedMeetingsAsync } from './meetingSlice';
import { selectUserState } from '../user/userSlice';

const Reservation = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(selectReservedMeetingsState);
  const userState = useSelector(selectUserState);

  useEffect(() => {
    dispatch(userReservedMeetingsAsync(userState.id));
  }, [userState]);

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

export default Reservation;
