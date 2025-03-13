// import { useEffect, useState } from "react";
// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contacts/operations";
// import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const { items, isLoading, error } = useSelector((state) => state.contacts);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/phoneBook"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    // <div>
    //   <Navigation />
    //   {/* <h1>Phonebook</h1>

    //   <ContactForm />
    //   <SearchBox />
    //   <ContactList /> */}
    // </div>
  );
}

export default App;
