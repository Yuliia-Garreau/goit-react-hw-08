// // import React from "react";
// import css from "./Navigation.module.css";
// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import { logoutThunk } from "../../redux/auth/operations";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

// const Navigation = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   return (
//     <header>
//       {user.name && <h3>Welcome, {user.name}</h3>}
//       <nav className={css.nav}>
//         <NavLink to="/" className={buildLinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/phoneBook" className={buildLinkClass}>
//           Phone Book
//         </NavLink>
//         {!isLoggedIn && (
//           <>
//             <NavLink to="/register" className={buildLinkClass}>
//               Register
//             </NavLink>
//             <NavLink to="/login" className={buildLinkClass}>
//               Log In
//             </NavLink>
//           </>
//         )}
//         {isLoggedIn && (
//           <button
//             onClick={() => dispatch(logoutThunk())}
//             className={css.button}
//           >
//             Logout
//           </button>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navigation;

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import AuthNav from "../AuthNav/AuthNav";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn);

  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {!isLoggedIn && <AuthNav />}
      {/* {!isLoggedIn && (
        <>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Log In
          </NavLink>
        </>
      )} */}

      {isLoggedIn && (
        <>
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
          <button
            onClick={() => dispatch(logoutThunk())}
            className={css.button}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
