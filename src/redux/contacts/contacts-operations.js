import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/contacts';

import { Notify } from 'notiflix';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const isNameAdded = contacts.items.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      const isNumberAdded = contacts.items.some(
        contact => contact.number === number
      );
      if (isNameAdded) {
        Notify.failure(`${name} is already in contacts`);
        return false;
      } else if (isNumberAdded) {
        Notify.failure(`${number} is already in contacts`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
