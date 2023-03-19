// import axios from 'axios';

// const contactsInstance = axios.create({
//   baseURL: 'https://6400c64829deaba5cb3f59ae.mockapi.io/contacts',
// });

// export const getAllContacts = async () => {
//   const { data } = await contactsInstance.get('/');
//   return data;
// };

// export const addContact = async data => {
//   const { data: result } = await contactsInstance.post('/', data);
//   return result;
// };

// export const deleteContact = async id => {
//   const { data } = await contactsInstance.delete(`/${id}`);
//   return data;
// };

import { instance } from './auth';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async id => {
  const { data } = await instance.post('/contacts', id);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
