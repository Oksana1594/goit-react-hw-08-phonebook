import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import styles from './contacts-item.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item} key={id}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(fetchDeleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
