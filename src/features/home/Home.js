import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MeetingCard from '../../common/meetingCard/MeetingCard';
// import MeetingForm from '../../meetingForm/MeetingForm';

const meeting = {
  meeting_id: 1,
  meeting_title: 'Introduction to CS',
  description: 'This a demo meeting creatied ...',
  user_id: 1,
};

const Home = () => (
  <main>
    <Box sx={{ paddingTop: '4rem' }}>
      {/* <MeetingForm /> */}
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
        <Grid>
          <MeetingCard meeting={meeting} />
        </Grid>
        <Grid>
          {/* <MeetingCard /> */}
        </Grid>
        <Grid>
          {/* <MeetingCard /> */}
        </Grid>
        <Grid>
          {/* <MeetingCard /> */}
        </Grid>
        <Grid>
          {/* <MeetingCard /> */}
        </Grid>
        <Grid>
          {/* <MeetingCard /> */}
        </Grid>
      </Grid>
    </Container>
  </main>
);

export default Home;
