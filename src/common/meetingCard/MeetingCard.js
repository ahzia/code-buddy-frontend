import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function MeetingCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 500,
        backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCnrAvtDMYbdQ2iYqIVOUzQ-y59fPSrMtdQ&usqp=CAU'})`,
        backgroundSize: 'cover',
        borderRadius: 7,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{
        color: 'white',
        display: 'flex',
        justifyContent: 'inherit',
        margin: 2,
      }}
      >
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
        sx={{
          bgcolor: 'teal',
          color: 'white',
          letterSpacing: 1,
          borderRadius: 5,
          fontWeight: 600,
          margin: 'auto',
          padding: '0 1rem',
        }}
      >
        Title:
      </Typography>
      <CardContent sx={{
        bgcolor: 'whitesmoke',
        borderRadius: 7,
        margin: 2,
      }}
      >
        <Typography variant="body2" color="text.secondary" sx={{ margin: '0 15px', textAlign: 'left' }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium.
        </Typography>
        <Box sx={{ padding: '2rem 0' }}>
          <IconButton sx={{ float: 'right' }}>
            <EventNoteOutlinedIcon sx={{ fontSize: '2.5rem' }} />
          </IconButton>
          <AvatarGroup total={10} sx={{ float: 'left' }}>
            <Avatar alt="Remy Sharp" />
            <Avatar alt="Travis Howard" />
            <Avatar alt="Agnes Walker" />
            <Avatar alt="Trevor Henderson" />
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  );
}
