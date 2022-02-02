import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import style from './style';

export default function MeetingForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.form}>
          <Typography sx={style.header}>
            Create your meeting buddy!
          </Typography>
          <TextField fullWidth label="Title" id="fullWidth" sx={{ margin: '1rem 0' }} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="MeetingType"
            sx={{ width: '100%', margin: '1rem 0' }}
          >
            <MenuItem value={10}>Problem Solving</MenuItem>
            <MenuItem value={20}>Coding</MenuItem>
            <MenuItem value={30}>Learning</MenuItem>
          </Select>
          <TextField fullWidth label="Description" id="fullWidth" sx={{ margin: '1rem 0' }} />
          <Button
            variant="contained"
            sx={style.btn}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
