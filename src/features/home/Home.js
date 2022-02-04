import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import MeetingCard from '../../meetingCard/MeetingCard';
// import MeetingForm from '../../meetingForm/MeetingForm';
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
        <Grid>
          {/* <MeetingCard /> */}
        </Grid>
      </Grid>
    </Container>
  </main>
);

export default Home;
