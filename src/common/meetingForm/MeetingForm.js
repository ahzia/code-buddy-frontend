import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'whitesmoke',
  border: '1px solid white',
  borderRadius: 7,
  boxShadow: 24,
  p: 4,
  margin: 'auto',
};

export default function MeetingForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const color = React.useState('');

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{
            textAlign: 'center',
            p: 2,
            fontSize: '1.5rem',
            fontWeight: 600,
            letterSpacing: '1px',
          }}
          >
            Create your meeting buddy!
          </Typography>
          <TextField fullWidth label="Title" id="fullWidth" sx={{ margin: '1rem 0' }} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Meeting type"
            sx={{ width: '100%', margin: '1rem 0' }}
          >
            <MenuItem value={10}>Problem Solving</MenuItem>
            <MenuItem value={20}>Coding</MenuItem>
            <MenuItem value={30}>Learning</MenuItem>
          </Select>
          <TextField fullWidth label="Description" id="fullWidth" sx={{ margin: '1rem 0' }} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={color}
            label="Color"
            sx={{ width: '100%', margin: '1rem 0' }}
          >
            <MenuItem value={10}>Blue</MenuItem>
            <MenuItem value={20}>Red</MenuItem>
            <MenuItem value={30}>Black</MenuItem>
          </Select>
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              margin: 'auto',
              bgcolor: 'teal',
              width: '100%',
              padding: '10px 0',
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
