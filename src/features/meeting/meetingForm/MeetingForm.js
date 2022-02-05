import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {
  meetingTypesAsync, createMeetingAsync, selectMeetingsState,
} from '../meetingSlice';
import style from './style';
import { openSuccessSnackbar, openErrorSnackbar } from '../../../common/snackbar/snackbarSlice';
import { selectUserState } from '../../user/userSlice';

const MeetingForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { meetingTypes } = useSelector(selectMeetingsState);
  const meetingState = useSelector(selectMeetingsState);
  const user = useSelector(selectUserState);
  useEffect(() => {
    dispatch(meetingTypesAsync());
  }, []);
  useEffect(() => {
    if (meetingState.status === 'error') {
      dispatch(openErrorSnackbar(meetingState.error));
    }
    if (meetingState.status === 'created') {
      dispatch(openSuccessSnackbar('Meeting Created'));
    }
  }, [meetingState]);

  const initialState = {
    title: '', meeting_type_id: '', description: '', user_id: user.id,
  };
  const [meeting, setMeeting] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setMeeting({ ...meeting, title: value });
    } else if (name === 'meeting_type_id') {
      setMeeting({ ...meeting, meeting_type_id: value });
    } else {
      setMeeting({ ...meeting, description: value });
    }
  };

  const resetForm = () => {
    setMeeting(initialState);
  };

  const submitMeeting = (e) => {
    e.preventDefault();
    if (meeting.title === '') {
      dispatch(openErrorSnackbar('Title is Required'));
    } else if (meeting.meeting_type_id === '') {
      dispatch(openErrorSnackbar('Meeting Type is Required'));
    } else if (meeting.description === '') {
      dispatch(openErrorSnackbar('Meeting Description is Required'));
    } else {
      dispatch(createMeetingAsync(meeting));
      resetForm();
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} className="meetingBtn" sx={style.meetingBtn}>Create a meeting</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.form} onSubmit={submitMeeting}>
          <Typography sx={style.header}>
            Create your meeting, buddy ;)
          </Typography>
          <TextField fullWidth label="Title" name="title" value={meeting.title} id="fullWidth" sx={{ margin: '1rem 0' }} onChange={onChange} />
          <FormControl fullWidth>
            <InputLabel id="meeting_type_id_label" sx={{ margin: '1rem 0' }}>Meeting Type</InputLabel>
            <Select
              labelId="meeting_type_id_label"
              id="meeting_type_id"
              label="Meeting Type"
              name="meeting_type_id"
              sx={{ width: '100%', margin: '1rem 0' }}
              value={meeting.meeting_type_id}
              onChange={onChange}
            >
              {meetingTypes.map((meetingType) => (
                <MenuItem value={meetingType.id} key={meetingType.id}>{meetingType.name}</MenuItem>
              ))}

            </Select>
          </FormControl>
          <TextField fullWidth label="Description" value={meeting.description} name="description" id="fullWidth" sx={{ margin: '1rem 0' }} onChange={onChange} />

          <Button
            variant="contained"
            sx={style.btn}
            onClick={submitMeeting}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MeetingForm;
