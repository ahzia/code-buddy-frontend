import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import style from './style';

const MeetingForm = ({ meeting }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState('');
  const [meeting_type, setMeeting_type] = useState('');
  const [description, setDescription] = useState('');



  const submitMeeting = (e) => {
    e.preventDefault();
    const newMeeting = {
      title,
      meeting_type,
      description,
    };

    setTitle('');
    setMeeting_type('')
    setDescription('');
  }


  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Create a meeting</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.form} >
          <Typography sx={style.header}>
            Create your meeting buddy!
          </Typography>
          <TextField fullWidth label="Title" id="fullWidth" sx={{ margin: '1rem 0' }} onChange={(e) => setTitle(e.target.value)}/>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="MeetingType"
            sx={{ width: '100%', margin: '1rem 0' }}
            onChange={(e) => setMeeting_type(e.target.value)}
          >
            <MenuItem value={10}>{meeting.meeting_type}</MenuItem>
            <MenuItem value={20}>{meeting.meeting_type}</MenuItem>
            <MenuItem value={30}>{meeting.meeting_type}</MenuItem>
          </Select>
          <TextField fullWidth label="Description" id="fullWidth" sx={{ margin: '1rem 0' }} onChange={(e) => setDescription(e.target.value)} />
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

export default MeetingForm;