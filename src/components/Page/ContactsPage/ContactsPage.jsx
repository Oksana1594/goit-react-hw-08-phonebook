import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';

import Form from 'components/Form/Form';
import ContactList from 'components/Contacts/ContactsList/ContactsList';
import FieldToFilter from 'components/FieldToFilter/FieldToFilter';
import MainTitle from 'components/Shared/MaineTitle';
import Title from 'components/Shared/Title';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);

  const isItems = Boolean(contacts.length);
  return (
    <>
      <MainTitle mainTitle="Phonebook " />
      <Form />
      <Title title="Contacts" />

      {isItems && <FieldToFilter />}
      {isItems && <ContactList />}

      {!isItems && (
        <p className="massage">Your phonebook is empty. Please add contact.</p>
      )}
    </>
  );
};

export default ContactsPage;
