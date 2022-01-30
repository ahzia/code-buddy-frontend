import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { loginOrRegisterAsync, selectUserName } from './userSlice';

export default function SignIn() {
  const theme = createTheme();
  const [error, setError] = useState('');
  const user = useSelector(selectUserName);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const resetForm = () => {
    setError('');
    setUserName('');
  };

  const onChange = (e) => {
    const { value } = e.target;
    setUserName(value.toLowerCase());
  };

  const submitUserToStore = (e) => {
    e.preventDefault();
    if (userName === '') {
      setError('User Name is Required');
    } else {
      dispatch(loginOrRegisterAsync(userName));
      resetForm();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Alert severity="info">
        <AlertTitle>Invalid Data</AlertTitle>
        {error}
        {' '}
        —
        <strong>check it out!</strong>
      </Alert>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitUserToStore} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="user_name"
              label="User Name"
              name="user_name"
              autoComplete="user_name"
              autoFocus
              onChange={onChange}
              value={userName}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <p>{user}</p>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
