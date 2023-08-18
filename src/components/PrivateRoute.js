import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.userDetails.isLoggedIn)

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
