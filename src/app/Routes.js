import {
  Route,
  Routes,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import Login from '../features/user/Login';
import Home from '../features/home/Home';
import Reservation from '../features/meeting/Reserved';
import Meeting from '../features/meeting/Meeting';
import { selectUserState } from '../features/user/userSlice';

const protectedComponent = (Component) => {
  const userState = useSelector(selectUserState);
  return (
    userState.status === 'login'
      ? <Component />
      : <Login />
  );
};

const loginOrHome = (userState) => (
  userState.status === 'login'
    ? <Home />
    : <Login />
);

const AllRoutes = () => {
  const userState = useSelector(selectUserState);
  return (
    <Routes>
      <Route
        path="/login"
        element={loginOrHome(userState)}
      />
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={protectedComponent(<Reservation />)} />
      <Route path="/meetings" element={protectedComponent(<Meeting />)} />
    </Routes>
  );
};

export default AllRoutes;
