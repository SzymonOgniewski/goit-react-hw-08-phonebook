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
  state.isPending = false;
  state.errorMessage = action.payload;
};
const isPendingAction = action => action.type.endsWith('pending');
const isRejectedAction = action => action.type.endsWith('rejected');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isPending: false,
    errorMessage: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, (state, action) => {
        state.errorMessage = null;
        state.isPending = false;
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.errorMessage = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.errorMessage = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(isPendingAction, handlePendingState)
      .addMatcher(isRejectedAction, handleErrorMessage)
      .addDefaultCase((state, action) => state);
  },
});

export const contactReducer = contactsSlice.reducer;
