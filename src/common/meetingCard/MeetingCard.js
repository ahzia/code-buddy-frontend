import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export default function MeetingCard() {
  return (
    <Card sx={{
      maxWidth: 345,
      height: 500,
      backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCnrAvtDMYbdQ2iYqIVOUzQ-y59fPSrMtdQ&usqp=CAU'})`,
      borderRadius: 7,
    }}
    >
      <Box sx={{
        color: 'white',
        display: 'flex',
        margin: 2,
        flexDirection: 'column',
        alignItems: 'baseline',
      }}
      >
        <Typography sx={{ padding: 1 }}>
          Meeting type:
        </Typography>
        <Typography sx={{ padding: 1 }}>
          Atendee limit:
        </Typography>
      </Box>
      <CardContent sx={{
        bgcolor: 'whitesmoke',
        borderRadius: 7,
        margin: 2,
        height: 200,
        position: 'relative',
      }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Title:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium.
        </Typography>
        <Typography sx={{
          margin: 2,
        }}
        >
          Link to the meeting:
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
