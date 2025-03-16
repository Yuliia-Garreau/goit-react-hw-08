// import React from 'react'

import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "./redux/auth/selectors";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// };
