import {
  Route,
  Routes,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import Login from '../features/user/Login';
import Home from '../features/home/Home';
import { selectUserState } from '../features/user/userSlice';

// const ProtectedRoute = (props) => {
//   const { component: Component, ...props } = this.props;
//   return (
//     <Route
//       {...props}
//       element={props => (
//         this.state.authenticated ?
//           <Component {...props} /> :
//           <Redirect to='/login' />
//       )}
//     />
//   )
// }

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
      <Route path="/" />
      {/* <ProtectedRoute path='/welcome' component={Welcome} /> */}
    </Routes>
  );
};

export default AllRoutes;
