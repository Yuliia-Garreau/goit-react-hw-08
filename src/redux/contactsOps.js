// import axios from "axios";

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "./auth/operations";
// // axios.defaults.baseURL = "https://67b3c51d392f4aa94fa83473.mockapi.io";

// export const fetchContacts = createAsyncThunk(
//   "/contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await api.get("/contacts");
//       //   console.log(response);

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "/contacts/addContact",
//   async (newContact, thunkAPI) => {
//     try {
//       const response = await api.post("/contacts", {
//         name: newContact.name,
//         number: newContact.number,
//       });
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "/contacts/deleteContact",
//   async (id, thunkAPI) => {
//     try {
//       const response = await api.delete(`/contacts/${id}`);
//       return response.data.id;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
