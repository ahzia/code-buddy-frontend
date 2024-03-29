import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { openSlideBar, closeSlideBar, selectSlideBarState } from './sideBarSlice';
import { signOut, selectUserState } from '../../../features/user/userSlice';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const open = useSelector(selectSlideBarState);
  const userState = useSelector(selectUserState);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    dispatch(openSlideBar());
  };

  const handleDrawerClose = () => {
    dispatch(closeSlideBar());
  };

  const handleSignOut = () => {
    dispatch(signOut());
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ bgcolor: 'teal', display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Code Buddy
            </Typography>
          </Box>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {userState.status !== 'login' ? (
                <MenuItem onClick={handleClose}><Link to="login">Login</Link></MenuItem>
              ) : (
                <div>
                  <MenuItem onClick={handleClose}>{userState.userName}</MenuItem>
                  <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* Here will be logo */}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: 'teal' }} />
            </ListItemIcon>
            <Link to="/"><ListItemText primary="Home" /></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FormatListBulletedOutlinedIcon sx={{ color: 'teal' }} />
            </ListItemIcon>
            <Link to="/reservations"><ListItemText primary="Reservations" /></Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddBoxOutlinedIcon sx={{ color: 'teal' }} />
            </ListItemIcon>
            <Link to="/meetings"><ListItemText primary="Meetings" /></Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export { drawerWidth };
