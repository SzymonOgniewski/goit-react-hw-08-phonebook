import {
  getAllContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsThunks';
import { createSlice } from '@reduxjs/toolkit';

const handlePendingState = (state, action) => {
  state.isPending = true;
};
const handleErrorMessage = (state, action) => {
  state.errorMessage = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isPending: false,
    errorMessage: null,
  },
  extraReducers: {
    [getAllContactsThunk.pending]: handlePendingState,
    [getAllContactsThunk.fulfilled]: (state, action) => {
      state.errorMessage = null;
      state.isPending = false;
      state.contacts = action.payload;
    },
    [getAllContactsThunk.rejected]: handleErrorMessage,
    [addContactThunk.pending]: handlePendingState,
    [addContactThunk.fulfilled]: (state, action) => {
      state.isPending = false;
      state.errorMessage = null;
      state.contacts.push(action.payload);
    },
    [addContactThunk.rejected]: handleErrorMessage,
    [deleteContactThunk.pending]: handlePendingState,
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.isPending = false;
      state.errorMessage = null;
      const id = action.payload.id;
      const index = state.contacts.findIndex(contact => contact.id === id);
      state.contacts.splice(index, 1);
    },
    [deleteContactThunk.rejected]: handleErrorMessage,
  },
});

export const contactReducer = contactsSlice.reducer;
