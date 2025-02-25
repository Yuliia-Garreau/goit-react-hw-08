import { createSelector, createSlice } from "@reduxjs/toolkit";
// import initialContacts from "../initialContacts.json";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};
const handlePending = (state) => {
  state.isLoading = true;
};

const handleReject = (state, actions) => {
  state.isLoading = false;
  state.error = actions.payload;
};
const slice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.items = actions.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, actions) => {
        state.items.push(actions.payload);
      })
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.items = state.items.filter(
          (contact) => contact.id !== actions.payload
        );
      })
      .addCase(deleteContact.rejected, handleReject);
  },
});
// export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
// console.log(selectContacts);
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts
      ? contacts.filter((contact) =>
          filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true
        )
      : [];
  }
);
